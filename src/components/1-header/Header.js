import './header.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
function Header() {

  const favoritesCount = useSelector((state) => state.favorites.items.length);
  return(
  <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <Link class="navbar-brand"to="/">Movies</Link>

    <li><Link to="/favorites">Favorites ({favoritesCount})</Link></li>




    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
 

       

        <li class="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>

 

      </ul>

    </div>
  </div>
</nav>
  
)}
export default Header;
