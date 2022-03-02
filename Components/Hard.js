import React from 'react'
import styles from '../styles/Home.module.css'
import { getColor } from '../reduxState/Colours/colorSlice';
import { useSelector } from "react-redux";

const Hard = () => {
  const colors = useSelector(getColor);

  return (
    <div className={styles.lowerSection}>
      <div className={styles.container}>
        {
          colors.color.map((element) => {
            return <div style={{ background: `${element}` }}></div>
          })
        }
      </div>
    </div>
  )
}

export default Hard