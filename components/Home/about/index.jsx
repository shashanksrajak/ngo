import React from "react";
import styles from "./style.module.css";
import Button from "@material-ui/core/Button";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_image}>
        <img
          src="https://dinbandhuhelpfoundation.weebly.com/uploads/1/2/5/1/125115490/img-20190414-131127_orig.jpg"
          alt="image"
        />
      </div>
      <div>
        <h2>Welocme to Dinbandhu NGO App</h2>
        <p>
          We , DINBANDHU HELP FOUNDATION Team Of Young College Students Started
          On The Day, 15 August 2018 From Ratanpur, Bilaspur C.G. With The
          Thought JAN JAGRUKTA KE MADHYAM SE SAMAJ KA VIKAS
        </p>
        <Button variant="outlined" color="primary">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default About;
