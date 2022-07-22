import React from 'react'
import picture from 'Assets/svg/formPicture.svg'
import styles from './Form.module.css'

const Form = () => {
  return (
    <div className={styles.mainContainer} >
      <img src={picture} />
      <div className={styles.textWrapper} >
        <p className={styles.title} >
          If you are interested then fill the <br /> form
        </p>
        <div className={styles.formButton} >
          Fill Form
        </div>
      </div>
    </div>
  )
}

export default Form