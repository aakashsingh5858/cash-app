import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import EyeIcon from "../../assets/images/eye button.svg";
import BarIcon from "../../assets/images/bar.png";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import CubeIcon from "../../assets/images/cube.svg";
import StairsIcon from "../../assets/images/stairs.svg";
import Phone from "../../assets/images/phone.svg";
import BulkCubeIcon from "../../assets/images/cube-m.svg";
import PillarIcon from "../../assets/images/pillar.svg";
import AppleIcon from "../../assets/images/apple-store.svg";
import PlayStoreIcon from "../../assets/images/play-store.svg";
import ArrowIcon from "../../assets/images/down-arrow.svg";
import CommentIcon from "../../assets/images/comment.svg";
import TwitterICon from "../../assets/images/twitter.svg";
import InstaIcon from "../../assets/images/insta.svg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const section_tab = [
    {
      label: "sign in",
    },
    {
      label: "legal",
    },
    {
      label: "licenses",
    },
    {
      label: "security",
    },
    {
      label: "careers",
    },
    {
      label: "press",
    },
    {
      label: "support",
    },
    {
      label: "status",
    },
    {
      label: "codeblog",
    },
  ];

  return (
    <section className="home-container">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} list={section_tab} />
      <nav className="home-nav">
        <div>
          <img src={Logo} className="logoImg" />
        </div>
        <div className="home-list-wrap">
          {section_tab.map((list) => {
            return <li className="home-list">{list.label}</li>;
          })}
        </div>
        <div>
          <img src={EyeIcon} className="eyeBtn" />
          <img
            src={BarIcon}
            className="barBtn"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>
      <div className="home-content-cashApp">
        <img src={CubeIcon} className="home-content-cube" />
        <h1 className="home-content-cash">cash</h1>
        <img src={StairsIcon} className="home-content-stairs" />
        <img src={Phone} className="home-content-phone" />
        <h1 className="home-content-app">app</h1>
      </div>
      <div className="media-container">
        <div className="store-wrapper">
          <button className="store-btn">
            <img src={AppleIcon} />
            <span>app store</span>
          </button>
          <button className="store-btn">
            <img src={PlayStoreIcon} />
            <span>play store</span>
          </button>
        </div>
        <div className="arrow-btn-wrapper">
          <img src={ArrowIcon} className="arrow-btn" />
        </div>
        <div className="home-content-para-wrap">
          <p className="home-content-para">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>

          <div className="social-media-wrap">
            <img src={CommentIcon} />
            <img src={TwitterICon} />
            <img src={InstaIcon} />
          </div>
        </div>
      </div>
      <img src={BulkCubeIcon} className="home-content-bulkCube" />
      <img src={PillarIcon} className="home-content-pillar" />
    </section>
  );
};

export default Home;
