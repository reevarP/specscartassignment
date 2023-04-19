import React from "react";
import styles from "./firstBanner.module.css";
import { AiFillPlayCircle } from "react-icons/ai";

const FirstBanner = () => {
  return (
    <div className={styles.firstBanner}>
      <div style={{ color: "#888888", fontWeight: "600", fontSize: "14px", marginBottom: "1rem" }}>Home Trial Cart 2.0</div>
      <div style={{ fontWeight: "700", fontSize: "20px", color: "#444444" }}>It's An Experience!</div>
      <div style={{ fontWeight: "700", fontSize: "20px", color: "#444444", marginBottom: "1rem" }}>Four Frames. Three Lenses. 1Laser</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button className={styles.tryNowButton}>Try Now</button>
        <button className={styles.playButton}>
          <AiFillPlayCircle />
        </button>
        <div style={{ fontSize: "14px", fontWeight: "500", color: "#444444" }}>Watch What's New!</div>
      </div>
    </div>
  );
};

export default FirstBanner;
