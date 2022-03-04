import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

const FireworksIllustration = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../public/lottiefiles/firework.json"),
    });
  }, []);
  return (
    <div className={styles.containerFireworks} ref={container}></div>
  )
}

export default FireworksIllustration;