
import './index.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Menu from './menu';
import Customize from './customize';
import About from './about';
import Contact from './contact';
import Confirm from './confirm';


function App() {
  return (
   <Router>
     <div className="App">
      <Navbar/>
      <div className="content">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/customize/:tea">
          <Customize/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/confirm">
          <Confirm />
        </Route>
      </Switch>
       </div>
      
    </div>
   </Router>
  );
}

export default App;
