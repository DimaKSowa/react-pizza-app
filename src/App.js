import React from 'react'
import './style.scss'
import Header from './components/Header'
import { useState } from "react";
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import NotFound from './pages/NotFound';
import {
  Routes,
  Route,
} from 'react-router-dom'



function App() {

  

  const [count, setCount] = useState(0)

  const [pizzas, setPizzas] = useState([])

  return (
    
    <>
      <Header count={count}/>
      <hr/>
      <Routes>
        <Route path='/' element={<Home setCount={setCount} setPizzas={setPizzas}/>}/>
        <Route path='/cart' element={<Cart pizzas={pizzas}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
