import React, { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import Header from "../../Components/Header/Header";
import FirstBanner from "../../Components/FirstBanner/FirstBanner";
import SecondBanner from "../../Components/SecondBanner/SecondBanner";
import ThirdBanner from "../../Components/ThirdBanner/ThirdBanner";
import MobHeader from "../../Components/MobHeader/MobHeader";
import FirstBannerMob from "../../Components/FirstBanner/FirstBannerMob";
import SecondBannerMob from "../../Components/SecondBanner/SecondBannerMob";

const Homepage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 767);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div>
      {isDesktop ? <Header /> : <MobHeader />}
      <div className="container-box">
        {isDesktop ? <FirstBanner /> : <FirstBannerMob />}
        {isDesktop ? <SecondBanner /> : <SecondBannerMob />}
        <ThirdBanner />
      </div>
    </div>
  );
};

export default Homepage;
