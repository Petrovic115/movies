import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="../img/netflix.jpeg" alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <Link className="movies-link" to="/movies">
              Movies
            </Link>
            <Link className="shows-link" to="/tvshows">
              TV Shows
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Home;
