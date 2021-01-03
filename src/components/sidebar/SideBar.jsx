import React, { useState } from 'react';
import * as VSCIcons from "react-icons/vsc";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './SideBar.css';


const SideBar = props => {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>

                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <VSCIcons.VscListFlat onClick={showSideBar}/>
                    </Link>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className='nav-menu-items' onClick={showSideBar}>

                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <VSCIcons.VscChromeClose />
                            </Link>
                        </li>

                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        
                    </ul>

                </nav>
            </IconContext.Provider>
        </>
    );
}

export default SideBar;