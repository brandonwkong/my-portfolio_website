import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home'; // Import your components
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Connect from './components/Connect';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App(){
  return(
    <Router>
      <nav>
        <button>
          <Link to ="/">Home</Link>
        </button>
        <button>
          <Link to ="/about">About</Link>
        </button>
        <button>
          <Link to ="/resume">Resume</Link>
        </button>
        <button>
          <Link to ="/portfolio">Portfolio</Link>
        </button>
        <button>
          <Link to ="/connect">Connect</Link>
        </button>
      </nav>
      <Routes>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/connect'>
          <Connect />
        </Route>
      </Routes>
    </Router>
  )
}
