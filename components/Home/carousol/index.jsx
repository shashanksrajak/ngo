import React from "react";
import { useState } from "react";
import styles from "./style.module.css";

const Carousol = () => {
  let slides = [
    "https://www.dinbandhuhelpfoundation.com/networkingFiles/images/bannerImage/7324cover%207.JPG",
    "https://www.dinbandhuhelpfoundation.com/networkingFiles/images/bannerImage/5094cover%208.JPG",
    "https://www.dinbandhuhelpfoundation.com/networkingFiles/images/bannerImage/3800cover%205.jpg",
  ];

  const [step, setStep] = useState(0);

  setTimeout(() => {
    if (step < 3) {
      setStep(step + 1);
    }
    if (step === 2) {
      setStep(0);
    }
  }, 2000);

  return (
    <div className={styles.slider}>
      <img src={slides[step]} alt="slider-images" />
    </div>
  );
};

export default Carousol;
