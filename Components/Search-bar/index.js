import React from "react";
import styles from "./searchbar.module.css";

export default function SearchBar({ ...rest }) {
  return (
    <div className={styles.searchbar_box}>
      <input className={styles.searchbar} placeholder="search" />
    </div>
  );
}
