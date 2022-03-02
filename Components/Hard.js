import React from 'react'
import styles from '../styles/Home.module.css'

const Hard = () => {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  

  return (
    <div className={styles.lowerSection}>
      <div className={styles.container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.container}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Hard