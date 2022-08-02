import React, { useState } from "react";
import MoviesCard from "../Components/MovieCard";
import tvshow from "../Components/TvShows.json";

const TvShows = () => {
  const [search, setSeacrh] = useState("");
  const [sort, setSort] = useState(tvshow);
  const sortingByRating = (e) => {
    e.preventDefault();
    let option = [e.target.value];
    const sortedList = [...sort].sort((a, b) =>
      a[option] > b[option] ? -1 : 1
    );
    setSort(sortedList);
  };
  return (
    <div>
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="search for the movie"
          name="input"
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
        .filter((movie) => {
          if (search === "") {
            return movie;
          } else if (movie.title.toLowerCase().includes(search.toLowerCase())) {
            return movie;
          }
        })
        .map((movie, i) => (
          <div className="movie-cards" key={i}>
            <MoviesCard
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

export default TvShows;
