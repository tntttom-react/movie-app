import React from "react";

import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
