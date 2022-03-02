import React from 'react'
import styles from '../styles/Home.module.css'

const LowerSection = () => {
    return (
        <div className={styles.lowerSection}>
            <div className={styles.container}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className={styles.container}>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </div>
    )
}

export default LowerSection