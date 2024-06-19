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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>

    </Router>
  )
}
