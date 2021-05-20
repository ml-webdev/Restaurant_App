import './App.css';
import Title from './components/Title';
import About from './components/About';
import Menu from './components/Menu';
import Call from './components/Call';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Title/>
          <nav className="navbar">
            <li><Link to='/'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/call'>Call Us</Link></li>
          </nav>
          <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/menu' component={Menu}/>
            <Route path='/call' component={Call}/>
          </Switch>

        </main>
      </Router>
    </div>
  );
}

export default App;
