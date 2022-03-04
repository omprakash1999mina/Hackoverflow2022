import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

const DisappearIllustration = () => {
    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: require("../public/lottiefiles/cloud.json"),
        });
    }, []);
    return (
        <div className={styles.containerDisappear} ref={container}></div>
    )
}

export default DisappearIllustration;