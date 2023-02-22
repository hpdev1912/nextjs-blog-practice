import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Button variant="text">Subscribe</Button>
      <h1 className={styles.title}>🍒Simple Blog🍒</h1>
      <span className={styles.icon}>
        <SearchIcon />
      </span>
      <Button variant="outlined">Sign Up</Button>
    </div>
  );
};

export default Header;
