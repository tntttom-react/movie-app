import React, { useState, useEffect } from "react";

import styles from "./MovieList.module.css";

import axios from "axios";

const MovieList = (props) => {
  const imageUrl = "http://image.tmdb.org/t/p/w200/";

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_KEY}`
      )
      .then((response) => setMovieList(response.data.results));
  }, []);

  console.log(movieList);

  const renderMovies = () => {
    if (movieList) {
      return movieList.map((movie, index) => (
        <div className={styles.movie} key={index}>
          <img src={`${imageUrl + movie.poster_path}`} />
        </div>
      ));
    } else {
      return <h2>No movies available</h2>;
    }
  };

  return (
    <div className={styles.movieListContainer}>
      <h1>Trending!</h1>
      <div className={styles.movieList}>{renderMovies()}</div>
    </div>
  );
};

export default MovieList;
