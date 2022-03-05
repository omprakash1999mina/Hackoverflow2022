import React from 'react'
import styles from '../styles/Home.module.css'
import DissappearIllustration from './DisappearIllustration';

const Easy = ({ state }) => {
  const { colorsArray, success, setSuccess, currentColorIndex,setAttempts, attempts } = state;
  const [colors, setColors] = React.useState([]);
  const [blockVisiblity, setBlockVisiblity] = React.useState([]);

  React.useEffect(() => {
    // making a array of elements of 3 from the main array
    setColors(colorsArray.slice(0, 3));
    // making a array of visiblity of elements
    setBlockVisiblity([true, true, true]);
  }, [colorsArray])

  const checkSuccess = (color, index) => {
    // if the use win then return witout any change on click after win
    if (success) { return; }
    
    // increasing the attemps with click
    setAttempts( attempts+1);

    // if user choosen color match with the current showing rgb vale color then assinging the all colors with right color
    if (color === colorsArray[currentColorIndex]) {
      let array = [];
      for (let index = 0; index < 3; index++) {
        array.push(colors[currentColorIndex])
      }
      setColors(array);
      setSuccess(true);
    }
    else {
      // if user choose wrong color the update visibility of that element false and success false
      let block = [...blockVisiblity];
      block[index] = false;
      setBlockVisiblity(block)
      setSuccess(false);
    }
  }

  return (
    <div className={styles.lowerSection}>
      <div className={styles.container}>
        {
          colors.map((color, index) => {
            return <div className={styles.block} key={index} onClick={() => checkSuccess(color, index)} style={{ background: `${color}`, visibility: !blockVisiblity[index] && !success && 'hidden' }}>{ !blockVisiblity[index] && <DissappearIllustration/>}</div>
          })
        }
      </div>
    </div>
  )
}

export default Easy