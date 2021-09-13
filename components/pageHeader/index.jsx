import React from "react";
import styles from "./style.module.css";

const PageHeader = ({ title }) => {
  return (
    <div className={styles.pageHeader}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
