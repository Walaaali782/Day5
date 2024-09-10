import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/1-header/Header";
import './App.css';
import Product from "./components/3-product/Product";
import ProductDetails from './components/8-ProductDetails/ProductDetails';
import FavoritesPage from './components/FavoritesPage';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<>
   
          <Product />
        </>} />
    

    

        <Route path="/:productId" element={<>
          <ProductDetails />
        </>} />

        <Route path="/favorites" element={<FavoritesPage/>} />


      </Routes>

     
    </div>
  );
}

export default App;
