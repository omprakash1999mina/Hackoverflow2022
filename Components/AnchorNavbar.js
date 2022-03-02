import React from 'react'
import styles from '../styles/Home.module.css'

const AnchorNavbar = () => {
    const [easy, setEasy] = React.useState(true);
    const [hard, setHard] = React.useState(true);
    return (
        <div className={styles.middleSection}>
            <div className={styles.buttons}>NEW COLORS</div>
            <span className={styles.buttonsContainer}>
                <div className={styles.buttons}>EASY</div>
                <div className={styles.buttons}>HARD</div>
            </span>
        </div>
    )
}

export default AnchorNavbar