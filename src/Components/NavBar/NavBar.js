import React from 'react'
import style from "./NavBar.module.css";
import logo from "../../Assets/logo.png"

function NavBar() {
  return (
    <div className={style.MainContainer}>
         <div className={style.LogContianer}>
           <img src={logo} />
         </div>
         <div className={style.ContectDetail}>
             Contact US
         </div>
     </div>
  )
}

export default NavBar