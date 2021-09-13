import React from "react";
import PageHeader from "../../components/pageHeader";
import styles from "./style.module.css";

const About = () => {
  return (
    <div>
      <PageHeader title={"About Us"} />

      <div className={`container ${styles.textBox}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          repellendus sed sit explicabo delectus vel voluptatum reiciendis
        </p>
      </div>

      <div className={styles.title}>
        <h2>Objectives</h2>
      </div>

      <div className={`container ${styles.textBox}`}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, cum.
          Sed incidunt fugit impedit voluptatibus at laborum doloremque dolorum
          recusandae esse minima, laudantium modi, quos rem, accusantium nam
        </p>
      </div>

      <div className={styles.title}>
        <h2>Our Motto</h2>
      </div>
      <div className={`container ${styles.textBox}`}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          quas eligendi ex? Placeat alias eaque harum accusamus doloremque
          voluptatibus omnis molestiae pariatur laborum asperiores, nostrum
        </p>
      </div>
    </div>
  );
};

export default About;
