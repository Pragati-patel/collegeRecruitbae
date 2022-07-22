import React from "react";
import styles from "./Candidate.module.css";
import leftImg from "Assets/svg/leftCandidate.svg";
import rightImg from "Assets/svg/rightCandidate.svg";
import avatars from "Assets/svg/avatars.svg";
import { ReactComponent as Splash } from "Assets/svg/splash.svg";
import SizedBox from "Components/SizedBox/SizedBox";

const Candidate = () => {
  return (
    <div className={styles.mainContainer}>
      <img src={leftImg} className={styles.leftIllus} />
      <img src={rightImg} className={styles.rightIllus} />
      <img src={avatars} className={styles.avatars} />
      <p className={styles.headText}>Our Candidate</p>
      <div className={styles.personWrapper}>
        <div className={styles.personContainer}>
          <Splash fill="rgba(42, 104, 60, 1)" />
          <div className={styles.personImage}>
            <img src="https://picsum.photos/200/200" />
          </div>
          <p className={styles.name}>Mujahid</p>
        </div>
        <SizedBox width={60} />
        <div className={styles.personContainer}>
          <Splash fill="rgba(94, 72, 232, 1)" />
          <div className={styles.personImage}>
            <img src="https://picsum.photos/200/200" />
          </div>
          <p className={styles.name}>Mujahid</p>
        </div>
        <SizedBox width={60} />
        <div className={styles.personContainer}>
          <Splash fill="rgba(229, 150, 0, 1)" />
          <div className={styles.personImage}>
            <img src="https://picsum.photos/200/200" />
          </div>
          <p className={styles.name}>Mujahid</p>
        </div>
        <SizedBox width={60} />
        <div className={styles.personContainer}>
          <Splash fill="rgba(235, 0, 255, 1)" />
          <div className={styles.personImage}>
            <img src="https://picsum.photos/200/200" />
          </div>
          <p className={styles.name}>Mujahid</p>
        </div>
        <SizedBox width={60} />
      </div>
    </div>
  );
};

export default Candidate;
