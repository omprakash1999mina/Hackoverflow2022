import React from 'react'
import styles from '../styles/Home.module.css'

const AnchorNavbar = ({ state }) => {
    const { setDifficulty, difficulty, setReset, reset } = state;

    return (
        <div className={styles.middleSection}>
            <div className={styles.buttons} onClick={() => setReset(!reset)} >NEW COLORS</div>
            <span className={styles.buttonsContainer}>
                <div className={difficulty === 'easy' ? styles.buttonsActive : styles.buttons} onClick={() => setDifficulty('easy')} >EASY</div>
                <div className={difficulty === 'hard' ? styles.buttonsActive : styles.buttons} onClick={() => setDifficulty('hard')}>HARD</div>
            </span >
        </div >
    )
}

export default AnchorNavbar