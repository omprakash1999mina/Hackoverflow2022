import React from 'react'
import styles from '../styles/Home.module.css'

const TopSection = ({ state }) => {
    const { currentColorIndex, colorsArray ,success} = state;
    return (
        <div className={styles.topSection} style={{ background: success ? colorsArray[currentColorIndex] : `rgb(243, 203, 24)` }}>
            <h1>
                THE GREAT
                <br />
                <span className={styles.rgb}>{colorsArray.length ? colorsArray[currentColorIndex] : `rgb(243, 203, 24)`}</span>
                <br />
                <p>COLOUR GAME</p>
            </h1>
        </div>
    )
}

export default TopSection