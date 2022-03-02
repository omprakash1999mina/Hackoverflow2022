import React from 'react'
import styles from '../styles/Home.module.css'

const TopSection = () => {
    return (
        <div className={styles.topSection}>
            <h1>
                THE GREAT
                <br />
                <span className={styles.rgb}>rgb(251,5,229)</span>
                <br />
                <p>COLOUR GAME</p>
            </h1>
        </div>
    )
}

export default TopSection