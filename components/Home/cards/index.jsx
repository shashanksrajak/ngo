import { red } from "@material-ui/core/colors";
import React from "react";
import styles from "./style.module.css";

const FeatureCards = () => {
  return (
    <div className={styles.card_bg}>
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <h2>Our Mission</h2>
          <hr style={{ marginTop: "10px", color: "blue" }} />
          <p>
            To lead to change thinking & devlopment of society. And provide
            Unity platform for Needy.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Our Mission</h2>
          <hr style={{ marginTop: "10px", color: "blue" }} />

          <p>
            To lead to change thinking & devlopment of society. And provide
            Unity platform for Needy.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Our Mission</h2>
          <hr style={{ marginTop: "10px", color: "blue" }} />
          <p>
            To lead to change thinking & devlopment of society. And provide
            Unity platform for Needy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
