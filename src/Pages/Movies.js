import React, { useState } from "react";
import movies from "../Components/Movies.json";
import MovieCard from "../Components/MovieCard";

const Movies = () => {
  const [search, setSeacrh] = useState("");
  const [sort, setSort] = useState(movies);
  const sortingByRating = (e) => {
    e.preventDefault();
    let option = [e.target.value];
    const sortedList = [...sort].sort((a, b) =>
      a[option] > b[option] ? 1 : -1
    );
    setSort(sortedList);
  };
  return (
    <div>
      <form autoComplete="off">
        <input
          className="search-input"
          type="text"
          placeholder="search for the movie"
          name="input"
          autoComplete="off"
          onChange={(event) => setSeacrh(event.target.value)}
        />
        <select
          onChange={(e) => {
            sortingByRating(e);
          }}
        >
          <option value="rating">rating</option>
          <option value="title">title</option>
          <option value="published">published</option>
        </select>
      </form>
      <div style={{
        maxWidth:"1170px",
        margin:"0 auto",
        display:"flex",
        flexWrap:'wrap',
        marginTop:"50px"
      }}> 
      {sort
        //filter radi da bi mogao search po imenu
        .filter((movie) => {
          if (search === "") {
            return movie;
          } else if (movie.title.toLowerCase().includes(search.toLowerCase())) {
            return movie;
          }
        })
        // mapiranje iz jsona
        .map((movie, i) => (
          <div className="movie-cards" key={i}>
            <MovieCard
              title={movie.title}
              img={movie.img}
              description={movie.description}
              published={movie.published}
              rating={movie.rating}
            />
          </div>
        ))}
        </div>
    </div>
  );
};

export default Movies;
