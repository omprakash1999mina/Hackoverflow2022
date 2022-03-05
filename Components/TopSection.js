import React from 'react'
import styles from '../styles/Home.module.css'

const TopSection = ({ state }) => {
    const { currentColorIndex, colorsArray, success, attempts } = state;
    return (
        <div className={styles.topSection} style={{ background: success ? colorsArray[currentColorIndex] : `rgb(243, 203, 24)` }}>
            {success && <p className={styles.win}>{`You Won in ${attempts} attempts`}</p>}
            {!success &&
                <>
                    <h1>THE GREAT</h1>
                    <p className={styles.rgb}>{colorsArray.length ? colorsArray[currentColorIndex] : `rgb(243, 203, 24)`}</p>
                    <h1>COLOUR GAME</h1>
                </>
            }
        </div >
    )
}

export default TopSection