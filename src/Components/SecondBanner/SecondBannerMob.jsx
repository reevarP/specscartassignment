import React from "react";
import styles from "./secondBannerMob.module.css";
import testimage from "../../Assets/testimage.jpg";

const SecondBannerMob = () => {
  const moveCircle = (event) => {
    let elem = document.getElementById("circle");
    let over = document.getElementById("overlay");
    elem.style.left = `${event.clientX - 16}px`;
    over.style.width = `${event.clientX}px`;
  };
  return (
    <div className={styles.secondBannerContent}>
      <div className={styles.heading}>Your eyes are splendid. Let people see them clearly.</div>
      <div className={styles.content}>
        We know how frustrating glasses glare can be. Anti-reflective or anti-glare coating prevents glare on your lenses - letting almost all light through. Not only do anti-reflective glasses help
        in computer use and driving at night, they also allow other people to see you clearly. You don’t need to tilt your head at awkward angles while getting photographed, either! Since more light
        reaches your eyes, you’ll also notice an improvement in your vision. And the best part? Anti-glare, anti-scratch, and anti-UV coatings are all free of cost at Specscart!
      </div>
      <div className={styles.testImage} title="Drag to see the difference">
        <div id="overlay" className={styles.overlay}></div>
        <div id="circle" className={styles.dragCircle} draggable onDrag={moveCircle} onDragEnd={moveCircle}></div>
        <img src={testimage} alt="" />
      </div>
    </div>
  );
};

export default SecondBannerMob;
