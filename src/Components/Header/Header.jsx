import React from "react";
import styles from "./header.module.css";
import logo from "../../Assets/specscartlogo.png";
import { BsSearch, BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.horizontalLine}></div>
        <div className={styles.contentContainer}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div className={styles.topLeft}>
              <div style={{ paddingRight: "0.5rem", borderRight: "1px solid #000000", fontSize: "12px", cursor: "pointer" }}>Free Returns</div>
              <div style={{ paddingRight: "0.5rem", borderRight: "1px solid #000000", fontSize: "12px", paddingLeft: "0.5rem", cursor: "pointer" }}>24 Hr Dispatch</div>
              <div style={{ paddingRight: "0.5rem", borderRight: "1px solid #000000", fontSize: "12px", paddingLeft: "0.5rem", cursor: "pointer" }}>Offers</div>
              <div style={{ paddingRight: "0.5rem", fontSize: "12px", paddingLeft: "0.5rem", cursor: "pointer" }}>Blog</div>
            </div>
            <div className={styles.botLeft}>
              <div style={{ paddingRight: "0.5rem", fontSize: "13px", cursor: "pointer" }}>Glasses</div>
              <div style={{ paddingRight: "0.5rem", fontSize: "13px", cursor: "pointer" }}>Sunglasses</div>
              <div style={{ paddingRight: "0.5rem", fontSize: "13px", cursor: "pointer" }}>Eye-Test</div>
              <div style={{ paddingRight: "0.5rem", fontSize: "13px", cursor: "pointer" }}>Blogs</div>
            </div>
          </div>
          <img src={logo} alt="" className={styles.logoImage} />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div className={styles.topLeft}>
              <div style={{ paddingLeft: "0.5rem", borderRight: "1px solid #000000", fontSize: "12px", paddingRight: "0.5rem", cursor: "pointer" }}>+441613125767</div>
              <div style={{ paddingLeft: "0.5rem", borderRight: "1px solid #000000", fontSize: "12px", paddingRight: "0.5rem", cursor: "pointer" }}>Help</div>
              <div style={{ paddingLeft: "0.5rem", fontSize: "12px", paddingRight: "0.5rem", cursor: "pointer" }}>Log In</div>
            </div>
            <div className={styles.botLeft}>
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
      </div>
    </>
  );
};

export default Header;
