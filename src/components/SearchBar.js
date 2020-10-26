import React, { useState } from "react";

import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.setSearch(search);

    setSearch("");
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input className={styles.searchBtn} type="submit" />
    </form>
  );
};

export default SearchBar;
