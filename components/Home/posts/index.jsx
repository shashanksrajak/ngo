import React from "react";
import styles from "./style.module.css";
import Button from "@material-ui/core/Button";

const Posts = () => {
  return (
    <div className={styles.posts_bg}>
      <div className={styles.posts}>
        <div className={styles.title}>
          <h2>Latest Posts</h2>
        </div>
        <div className={`container ${styles.post_grid}`}>
          <div className={styles.card}>
            <h3>This is article heading</h3>
            <Button variant="outlined" color="primary">
              Read More
            </Button>
          </div>
          <div className={styles.card}>
            <h3>This is article heading</h3>
            <Button variant="outlined" color="primary">
              Read More
            </Button>
          </div>
          <div className={styles.card}>
            <h3>This is article heading</h3>
            <Button variant="outlined" color="primary">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
