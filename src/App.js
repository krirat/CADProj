import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './Home.js';
import Quiz from './Quiz.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadproj" exact element={<Home/>}/>
        <Route path="/cadproj/quiz" element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
