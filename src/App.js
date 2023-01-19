import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Error404 from './Components/Error404';
import Home from './Components/Home'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Error404 />} ></Route>
      </Routes>
    </>
  );
}

export default App;