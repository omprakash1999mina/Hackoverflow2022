import React from 'react'
import styles from '../styles/Home.module.css'
import { getColor } from '../reduxState/Colours/colorSlice';
import { useSelector } from "react-redux";

const Easy = () => {
  const [colorsArray, setColorsArray] = React.useState([]);
  const colors = useSelector(getColor);
  React.useEffect(() => {
    setColorsArray( colors.color.slice(0, 3) );
    console.log(colorsArray)

  }, [colors])

  return (
    <div className={styles.lowerSection}>
      <div className={styles.container}>
        {
          colorsArray.map((element) => {
            return <div style={{ background: `${element}` }}></div>
          })
        }
      </div>
    </div>
  )
}

export default Easy