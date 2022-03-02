import React from 'react'
import styles from '../styles/Home.module.css'
import Easy from './Easy';
import Hard from './Hard';
import { useDispatch } from "react-redux";

const AnchorNavbar = () => {
    const [easy, setEasy] = React.useState(true);
    const [hard, setHard] = React.useState(false);

    return (
        <>
            <div className={styles.middleSection}>
                <div className={styles.buttons}>NEW COLORS</div>
                <span className={styles.buttonsContainer}>
                    <div className={easy ? styles.buttonsActive : styles.buttons} onClick={() => { setHard(false); setEasy(true) }} >EASY</div>
                    <div className={hard ? styles.buttonsActive : styles.buttons} onClick={() => { setHard(true); setEasy(false) }}>HARD</div>
                </span >
            </div >

            <div className={styles.lowerSection}>

                {easy ? <Easy /> : <Hard />}
            </div >
        </>
    )
}

export default AnchorNavbar