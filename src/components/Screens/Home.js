import React from "react";

import styles from "./Home.module.css";

import SearchBar from "../SearchBar";
import MovieList from "../MovieList";

const Home = (props) => {
  return (
    <div className={styles.homeContainer}>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default Home;
