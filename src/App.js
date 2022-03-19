import React from 'react';
import logo from './pics/logo.png';
import heart from './pics/heart.png';
import './App.css';


function App() {
  return (
    <div className='app'>
      <div className='header'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='container no-right-margin right-side'>
            <div className='container-vert'>
              <h1>Coronary Artery Disease</h1>
              <p>Analyze your risk of getting a heart disease now!</p>
            </div>
            <img src={heart} alt='heart'/>
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
