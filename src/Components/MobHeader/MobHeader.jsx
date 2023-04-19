import React from "react";
import styles from "./mobHeader.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../Assets/specscartlogo.png";
import { BsPerson, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";

const MobHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.horizontalLine}></div>
      <div className={styles.contentContainer}>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <RxHamburgerMenu />
          <img src={logo} alt="" className={styles.logoImage} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ padding: "0 0.5rem", borderRight: "1px solid #dfdfdf", fontSize: "13px", cursor: "pointer" }}>
            <BsSearch fontSize={18} color="#888888" />
          </div>
          <div style={{ padding: "0 0.5rem", borderRight: "1px solid #dfdfdf", fontSize: "13px", cursor: "pointer" }}>
            <BsPerson fontSize={18} color="#888888" />
          </div>
          <div style={{ padding: "0 0.5rem", borderRight: "1px solid #dfdfdf", fontSize: "13px", cursor: "pointer" }}>
            <AiOutlineHeart fontSize={18} color="#888888" />
          </div>
          <div style={{ padding: "0 0.5rem", borderRight: "1px solid #dfdfdf", fontSize: "13px", cursor: "pointer" }}>
            <BiHomeCircle fontSize={18} color="#888888" />
          </div>
          <div style={{ padding: "0 0.5rem", fontSize: "13px", cursor: "pointer" }}>
            <RiShoppingCartLine fontSize={18} color="#888888" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobHeader;
