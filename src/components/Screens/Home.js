import React, { useState } from "react";

import styles from "./Home.module.css";

import SearchBar from "../SearchBar";
import MovieList from "../MovieList";

const Home = (props) => {
  const [searchText, setSearchText] = useState("");

  const onSearchSubmit = (searchInput) => {
    console.log(searchInput);

    setSearchText(searchInput);
  };

  return (
    <div className={styles.homeContainer}>
      <SearchBar setSearch={onSearchSubmit} />
      <MovieList searchInput={searchText} />
    </div>
  );
};

export default Home;
