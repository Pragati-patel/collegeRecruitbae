import React from "react";
import styles from "./Process.module.css";
import rightArrow from "Assets/webp/rightArrow.webp";
import SizedBox from "Components/SizedBox/SizedBox";
import college from "Assets/svg/college.svg";
import assessment from "Assets/svg/assessment.svg";
import interview from "Assets/svg/interview.svg";
import placement from "Assets/svg/placement.svg";
import arrow1 from "Assets/webp/arrow1.webp";
import arrow2 from "Assets/webp/arrow2.webp";
import arrow3 from "Assets/webp/arrow3.webp";
import people from "Assets/webp/people.webp";
import mobileArrow from "Assets/webp/mobileArrow.svg";
import lastMobileArrow from "Assets/webp/specailMobileArrow.svg";

export const Process = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <img src={rightArrow} />
        <p className={styles.headText}>Our Process</p>
      </div>
      <SizedBox height={86} />

      <div
        className={styles.journeyWrapper}
        style={{ backgroundImage: `url(${people})` }}
      >
        <div
          className={styles.circularIcon1}
          style={{ backgroundImage: `url(${college})` }}
        >
          <p className={styles.iconTexts}>Colleges</p>
        </div>
        <img src={mobileArrow} alt="" className={styles.mobileArrow} />
        <img src={arrow1} className={`${styles.arrow1} ${styles.webArrows}`} />

        <div
          className={styles.circularIcon2}
          style={{ backgroundImage: `url(${assessment})` }}
        >
          <p className={styles.iconTexts}>Assessment</p>
        </div>
        <img src={mobileArrow} alt="" className={styles.mobileArrow} />
        <img src={arrow2} className={`${styles.arrow2} ${styles.webArrows}`} />

        <div
          className={styles.circularIcon3}
          style={{ backgroundImage: `url(${interview})` }}
        >
          <p className={styles.iconTexts}>Interview</p>
        </div>
        <img src={lastMobileArrow} className={styles.lastMobileArrow} />
        <img src={arrow3} className={`${styles.arrow3} ${styles.webArrows}`} />

        <div
          className={styles.circularIcon4}
          style={{ backgroundImage: `url(${placement})` }}
        >
          <p className={styles.iconTexts}>Placement</p>
        </div>
      </div>
    </div>
  );
};
