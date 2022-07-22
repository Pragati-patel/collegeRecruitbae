import React from 'react'
import styles from './CareerTransformation.module.css'
import illustration from 'Assets/svg/careerTransformationImg.svg'

const CareerTransformation = () => {
  return (
    <div className={styles.mainContainer} >
      <p className={styles.headText} >
        What your student receive <br /> noy just placemnets, but a complete <br /> career transformation
      </p>
      <img src={illustration} />
    </div>
  )
}

export default CareerTransformation