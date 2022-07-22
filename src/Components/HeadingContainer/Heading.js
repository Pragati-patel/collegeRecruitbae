import React from 'react'
import style from './Heading.module.css';
import RedBall from "../../Assets/RedBall.png";
import BlueBall from "../../Assets/BlueBall.png";
import GroupImage from "../../Assets/GroupPic.png";

function Heading() {
  return (
    <div className={style.MainContainer}>  

        <div className={style.TopContainer}>
           <div className={style.RedBall}><img src={BlueBall}/></div>
            <div className={style.TextContianer}>
         <div className={style.HeadingText}>
         lorem ipsum dolor sit amet condtry adopod dknjdd djdkfj
         </div>

          <div className={style.SubTextinfo}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis velit vitae magna malesuada pharetra. Maecenas sit amet laoreet mi. Ut tempus ligula ut nisi sodales fringilla.
          </div> 
          </div>
           <div className={style.BlueBall}><img src={RedBall}/></div>
        </div>

       <div className={style.FormButton}>
             Fill from
       </div>
       
       <div className={style.GroupImage}>
           <img src={GroupImage} alt="" />
       </div>

    </div>
  )
}

export default Heading