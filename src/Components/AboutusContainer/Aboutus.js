import React from 'react'
import style from "./Aboutus.module.css";
import complogo from "../../Assets/complogo.png";
import CompanyLogo from "../../Assets/CompanyLogo.png";
import GreenImage from "../../Assets/GreenImage.svg"
function Aboutus() {
  return (
    <div className={style.MainContainer}>
        <div className={style.HeadingText}>
        who we are
        </div>
        
       <div className={style.CompLogo}>
          <img src={complogo} />
       </div>

       <div className={style.SubHeading}>
         We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
       </div>

       <div className={style.AnotherHeading}>
         Our Pool Client
       </div>
      
       <div className={style.ComapnyLogoImage}>
         <img src={CompanyLogo} />
       </div>

       <div className={style.GreenImage}>
          <img src={GreenImage}/>
       </div>
     
    </div>
  )
}

export default Aboutus;