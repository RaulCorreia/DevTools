import './App.css';

import SideBar from './components/sidebar/SideBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import JsonFormat from './pages/JsonFormat';
import LoremIpsum from './pages/LoremIpsum';
import Regex from './pages/Regex';
import UrlEncDec from './pages/UrlEncDec';

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Switch>
          <Route path='/jsonformat' component={JsonFormat}/>
          <Route path='/loremipsum' component={LoremIpsum}/>
          <Route path='/regex' component={Regex}/>
          <Route path='/urlencdec' component={UrlEncDec}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
