import React from "react";
import style from "./Collabration.module.css";
import ComaR from "../../Assets/ComaR.png";
import ComaL from "../../Assets/ComaL.png";
import yellowHat from "Assets/webp/yellowHat.webp";
import macbook from "Assets/webp/macbook.webp";
import graduatedPerson from "Assets/webp/graduatedPerson.webp";
import house from "Assets/webp/house.webp";
import tick from "Assets/webp/tick.webp";
import SizedBox from "Components/SizedBox/SizedBox";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Collabration() {
  let firstCardPoints = [
    { label: "We take placement record to 100%" },
    { label: "Includes graduate and alumni" },
    { label: "Assigned Relationship Manager for best result" },
    { label: "we already helping 100+ colleges across India" },
  ];

  return (
    <div className={style.MianContainer}>
      <div className={style.HeadingSection}>
        <div className={style.ComaImage}>
          {/* <img src={ComaL} /> */}
          <ImQuotesLeft size={"2rem"} color="#dfe0e0" />
        </div>
        <div className={style.HeadingText}>
          Collaborate with us, and we’ll ensure that every last student of your
          college gets hired.
        </div>
        <div className={style.CommaImageOP}>
          {/* <img src={ComaR} /> */}
          <ImQuotesRight size={"2rem"} color="#dfe0e0" />
        </div>
      </div>
      <div className={style.height_upper_card_wrapper}>
        <SizedBox height={135} />
      </div>
      <div className={style.cardsWrapper}>
        <div className={`${style.cardContainer} ${style.topSpacing}`}>
          <p className={style.heading}>
            An Institute associates <br /> with us:
          </p>
          <div className={style.borderdCardContainer}>
            <img src={yellowHat} className={style.iconStyle} />
            <div>
              {firstCardPoints?.map((item) => (
                <RowDiv>
                  <img src={tick} className={style.tick} />
                  <p className={style.points}>{item.label}</p>
                </RowDiv>
              ))}
            </div>
          </div>
        </div>

        <div className={`${style.cardContainer}`}>
          <p className={style.heading}>
            what we have do for <br /> you
          </p>
          <div
            className={`${style.borderdCardContainer} ${style.middleCard}`}
            style={{ position: "relative" }}
          >
            <div className={style.blueStrip} />
            <div style={{ width: "90%" }}>
              {firstCardPoints?.map((item) => (
                <RowDiv>
                  <img src={tick} className={style.tick} />
                  <p className={style.points}>{item.label}</p>
                </RowDiv>
              ))}
            </div>
            <SizedBox height={16} />
            <img src={macbook} className={style.iconStyle} />
          </div>
        </div>

        <div className={`${style.cardContainer} ${style.topSpacing}`}>
          <p className={style.heading}>
            What your Students <br /> receive
          </p>
          <div className={style.borderdCardContainer}>
            <img src={graduatedPerson} className={style.iconStyle} />
            <div>
              {firstCardPoints?.map((item) => (
                <RowDiv>
                  <img src={tick} className={style.tick} />
                  <p className={style.points}>{item.label}</p>
                </RowDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SizedBox height={100} />
      <img src={house} className={style.houseImg} />
    </div>
  );
}

export const BorderedCard = (props) => (
  <div className={style.borderdCardContainer}>{props.children}</div>
);
export const RowDiv = (props) => (
  <div className={style.rowDiv}>{props.children}</div>
);

export default Collabration;
