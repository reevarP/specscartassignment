import React, { useState } from "react";
import styles from "./thirdBanner.module.css";
import image from "../../Assets/testimage.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ThirdBanner = () => {
  const [imgArr, setImgArr] = useState([{ link: image }, { link: image }, { link: image }, { link: image }, { link: image }]);
  const scrollmoveleft = () => {
    let elem = document.getElementById("scrollbox");
    elem.scrollTo({ left: elem.scrollLeft + 256, behavior: "smooth" });
  };
  const scrollmoveright = () => {
    let elem = document.getElementById("scrollbox");
    elem.scrollTo({ left: elem.scrollLeft - 256, behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Our Feeds</div>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div
          onClick={scrollmoveright}
          style={{ cursor: "pointer", borderRadius: "50%", boxShadow: "4px 0 10px #dfdfdf", height: "2rem", width: "2rem", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <BsChevronLeft />
        </div>
        <div id="scrollbox" className={styles.imagesContainer}>
          <div className={styles.fitContainer}>
            {imgArr.map((curElem) => {
              return (
                <div className={styles.eachImageContainer}>
                  <img src={curElem.link} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div
          onClick={scrollmoveleft}
          style={{ cursor: "pointer", borderRadius: "50%", boxShadow: "4px 0 10px #dfdfdf", height: "2rem", width: "2rem", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
