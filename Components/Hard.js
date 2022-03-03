import React from 'react'
import styles from '../styles/Home.module.css'

const Hard = ({ state }) => {
  const { colorsArray, success, setSuccess, currentColorIndex } = state;
  const [colors, setColors] = React.useState([]);

  React.useEffect(() => {
    setColors(colorsArray);
  }, [colorsArray])

  const checkSuccess = (color, index) => {
    if(success){ return; }

    if ( color === colorsArray[currentColorIndex]) {
      let array = [] ;
      for (let index = 0; index < 6; index++) {
        array.push(colors[currentColorIndex]) 
      }
      setColors(array);
      setSuccess(true);
    }
    else {
      const newColors = colors.filter(item => item !== colors[index])
      setColors(newColors);
      setSuccess(false);
    }
  }
  return (
    <div className={styles.lowerSection}>
      <div className={styles.container}>
        <div className={styles.blockContainer}>
          {
            colors.map((color, index) => {
              return <div className={styles.block} key={index} onClick={() => checkSuccess(color, index)} style={{ background: success ? colorsArray[currentColorIndex] : `${color}` }} ></div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Hard