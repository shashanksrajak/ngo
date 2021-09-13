import React from "react";
import styles from "./style.module.css";
import Button from "@material-ui/core/Button";

const Gallery = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.title}>
        <h2>Photo Gallery</h2>
      </div>
      <div className={`container ${styles.post_grid}`}>
        <div className={styles.card}>single image</div>
        <div className={styles.card}>single image</div>

        <div className={styles.card}>single image</div>

        <div className={styles.card}>single image</div>

        <div className={styles.card}>single image</div>

        <div className={styles.card}>single image</div>
      </div>
    </div>
  );
};

export default Gallery;
