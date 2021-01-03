const { app, BrowserWindow, Tray, nativeImage } = require('electron');
const path = require('path');

let tray, mainWindow;
 
if (process.platform === 'darwin') {
    app.dock.hide();
}

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        skipTaskbar: true,
        center: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
  
    mainWindow.loadURL('http://localhost:3000');

    mainWindow.webContents.openDevTools();

    mainWindow.on('close', (event) => {
        //if (app.quitting) {
            mainWindow = null
        // } else {
        //     event.preventDefault();
        //     mainWindow.hide();
        // }
    });

    mainWindow.on('minimize', (event) => {
        event.preventDefault();
        mainWindow.hide();
    });
}


const createTray = () => {
    const icon = path.join(__dirname, 'assets/tools.png');
    const nImage = nativeImage.createFromPath(icon);

    tray = new Tray(nImage);
    tray.setToolTip('DevTools');
    tray.on('click', (event) => { toggleWindow() });
}

const toggleWindow = () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
}


app.whenReady().then(() => {
    createTray();
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    } else {
        mainWindow.show();
    }
});

