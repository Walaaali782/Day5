// src/components/ProductList.js
import { useEffect, useState } from "react";
import './product.css';
import { motion } from "framer-motion"
import List from "./List";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../favoritesSlice';

function ProductList() {
  const [pro, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const getdata = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f09fb963d3e394d1aed39bb062b0eaa2')
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data); 
        setProducts(data.results);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getdata();
  }, []);

  // Filter products based on the search query
  const filteredProducts = pro.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Check if a movie is in favorites
  const isFavorite = (movie) => favorites.some(fav => fav.id === movie.id);

  const toggleFavorite = (movie) => {
    if (isFavorite(movie)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="ProductList">
      <input 
        type="text" 
        placeholder="Search by title..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      
      />

      <div className="container">
        <div className="row">
          {filteredProducts.map((product) => {
            return (
              <motion.div
                layout
                animate={{ transform: "scale(1)" }}
                initial={{ transform: "scale(0)" }}
                transition={{ type: "spring", damping: 8 }}
                className="col-3"
                key={product.id}
              >
                <List product={product} />
                <button 
                  onClick={() => toggleFavorite(product)} 
                  style={{ 
                    background: isFavorite(product) ? 'gold' : 'white', 
                    border: '1px solid gold', 
                    cursor: 'pointer' ,
                    position:'relative',
                        padding:'5px',
                           top:'-45px'
                  }}

          
                >
                  {isFavorite(product) ? '★' : '☆'} {/* Filled or bordered star */}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
