import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Reviews from './pages/Reviews';
import Main from './components/Main';
import FullPage from './components/FullPage';
import Login from './pages/Login';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullPage />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}