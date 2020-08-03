import React, { useState } from 'react';
import './App.css';
import { Tween } from 'react-gsap';


function App() {
  const [navlist, setnavlist] = useState(true)

  return (
    <div className="App">
      <body>
        <header>
          <nav className={navlist ? "main-nav" : "open"}>
          <Tween
              from={{ x: '-200px', opacity:0 }}
              to={{ x: 0, opacity: 1 }}
              duration={2}
              delay={.5}
            >
            <div className="logo">
              <a href="/">LHR</a>
            </div>
            </Tween>
            <Tween
              from={{ x: '-200px', opacity:0 }}
              to={{ x: 0, opacity: 1 }}
              duration={2}
              delay={.8}
            >
            <div className="hamburger-menu" onClick={()=> setnavlist(!navlist)}>
              <span className="bar">
              </span>
            </div>
            </Tween>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Contact</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Map</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="hero">
            <Tween
              from={{ scaleX: 0 }}
              to={{ scaleX: 1 }}
              duration={1}
            >
          <div className="hero-clipped">
          <Tween
              from={{ yPercent: 40 , opacity:0 }}
              to={{ yPercent: -50, opacity: 1 }}
              duration={1}
              delay={1.3}
            >
             <div className="hero-text">
              <h1 className="main-heading">Lahore</h1>
              <h2 className="sub-heading">Learn about city attractions</h2>
              <h6>Responsive to screen size</h6>
              <a href="/" className="cta-btn">Virtual Tour</a>
            </div>
            </Tween>
          </div>
          </Tween>
        </section>
      </body>
    </div>
  );
}

export default App;
