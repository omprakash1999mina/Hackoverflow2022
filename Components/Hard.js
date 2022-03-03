import React from 'react'
import styles from '../styles/Home.module.css'

const Hard = ({ state }) => {
  const { colorsArray, success, setSuccess, currentColorIndex } = state;
  const [colors, setColors] = React.useState([]);

  React.useEffect(() => {
    setColors(colorsArray);
  }, [colorsArray])

  const checkSuccess = (color, index) => {
    if (color === colorsArray[currentColorIndex]) {
      setSuccess(true);
    }
    else {
      const newColors = colors.filter(item => item !== colors[index])
      setColors(newColors);
    }
  }
  return (
    <div className={styles.lowerSection}>
      <div className={styles.container}>
        {
          colors.map((color, index) => {
            return <div key={index} onClick={() => checkSuccess(color, index)} style={{ background: success ? colorsArray[currentColorIndex] : `${color}` }} ></div>
          })
        }
      </div>
    </div>
  )
}

export default Hard