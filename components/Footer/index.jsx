import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_grid}>
        <div>
          <div>
            <img src="/logo.svg" alt="logo" />
          </div>
          <p>
            SAMARPIT-Centre for Poverty Alleviation and Social Research , 37,
            Geetanjali Enclave, Ring Road No. – 2, Bilaspur, Chattisgarh, 495
            001
          </p>
          <p>(07752) 402731/ 418476, +91 98934-28881</p>
          <p>samarpitcg@gmail.com</p>
        </div>
        <div>
          <p>Useful Links</p>
        </div>
        <div>
          <p>Social Media</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
