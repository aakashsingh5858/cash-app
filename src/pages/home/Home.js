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
import LeftPillar from "../../assets/images/left-pillar.svg";
import LargePillarRight from "../../assets/images/large-pillar-right.svg";
import MidPillarLeft from "../../assets/images/mid-pillar.svg";
import SmallPillar from "../../assets/images/small-pillar.svg";
import LargePillar from "../../assets/images/large-pillar.svg";
import CylinderPillarLarge from "../../assets/images/cyn-pillar-large.svg";
import HalfPillar from "../../assets/images/half-pillar.svg";
import PaymentPhone from "../../assets/images/payment-phone.svg";
import Hole from "../../assets/images/banking-hole.svg";
import Track from "../../assets/images/banking-track-2.svg";
import Column from "../../assets/images/banking-column.svg";
import Track2 from "../../assets/images/banking-track-1.svg";
import BankingPhone from "../../assets/images/banking-phone.svg";
import BankingStairs from "../../assets/images/banking-stairs-2.svg";
import BankingStairs2 from "../../assets/images/banking-stairs-1.svg";
import BankingTube from "../../assets/images/banking-tube.svg";
import Hole2 from "../../assets/images/banking-hole (1).svg";
import Monster from "../../assets/images/banking-monster.svg";
import Cube from "../../assets/images/banking-cubes.svg";
import Ramp from "../../assets/images/banking-ramp-1.svg";
import Ramp2 from "../../assets/images/banking-ramp-2.svg";
import Stairs from "../../assets/images/boost-stairs-2 (1).svg";
import Stairs2 from "../../assets/images/boost-stairs-1.svg";
import HandIcon from "../../assets/images/boost-hand.svg";
import CardIcon from "../../assets/images/boost-card.svg";
import BurgerIcon from "../../assets/images/boost-burger.svg";
import CoffeeIcon from "../../assets/images/boost-coffee.svg";
import ShoeIcon from "../../assets/images/boost-shoe.svg";
import PhoneIcon from "../../assets/images/boost-phone.svg";
import PhoneStockIcon from "../../assets/images/investing-stocks.svg";
import PhoneBitcoinIcon from "../../assets/images/investing-bitcoin.svg";
import BitcoinGraph from "../../assets/images/investing-graph-3 1.svg";
import StockGraph from "../../assets/images/investing-graph-1.svg";
import InstaWhiteIcon from "../../assets/images/invest-insta.svg";
import TwitterWhiteIcon from "../../assets/images/invest-twitter.svg";
import CommentWhiteIcon from "../../assets/images/invest-comment.svg";

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
    <>
      <section className="nav-container">
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
          <div className="arrow-btn-wrapper-2">
            <img src={ArrowIcon} className="arrow-btn" />
          </div>
        </div>
        <img src={BulkCubeIcon} className="home-content-bulkCube" />
        <img src={PillarIcon} className="home-content-pillar" />
      </section>
      <section className="payment-section">
        <div className="payment-content">
          <div className="paymentTextSection">
            <h2 className="payment-heading">Payments</h2>
            <p className="payment-para">
              Send and receive money with anyone, donate to an important cause,
              or tip professionals. Just enter a $cashtag, phone number, or scan
              their QR code to pay.
            </p>
          </div>

          <img src={PaymentPhone} className="payment-phone" />
        </div>
        <div className="payment-pillar-block">
          <img src={LeftPillar} className="left-pillar" />
          <img src={LargePillarRight} className="large-pillar-right" />
          <img src={MidPillarLeft} className="mid-pillar-right" />
          <img src={MidPillarLeft} className="mid-pillar-left" />
          <img src={SmallPillar} className="small-pillar" />
          <img src={LargePillar} className="large-pillar" />
          <img src={CylinderPillarLarge} className="cylinder-large-pillar" />
          <img src={MidPillarLeft} className="mid-pillar" />
          <img src={HalfPillar} className="half-pillar" />
        </div>
      </section>
      <section className="banking-section">
        <div className="banking-content">
          <h2 className="banking-heading">Banking</h2>
          <p className="banking-para">
            Receive your paycheck, tax returns, and other direct deposits up to
            two days early using your Cash App routing and account number.
          </p>
        </div>
        <img src={Hole} className="banking-hole" />
        <img src={Track} className="banking-track" />
        <img src={Column} className="banking-column" />
        <img src={Track2} className="banking-track-2" />
        <img src={BankingPhone} className="banking-phone" />
        <img src={BankingStairs} className="banking-stairs-2" />
        <img src={BankingStairs2} className="banking-stairs-1" />
        <img src={BankingTube} className="banking-tube" />
        <img src={Hole2} className="banking-hole2" />
        <img src={Monster} className="banking-monster" />
        <img src={Cube} className="banking-cube" />
        <img src={Ramp} className="banking-ramp" />
        <img src={Ramp2} className="banking-ramp-2" />
      </section>
      <section className="boost-section">
        <div className="boost-left-section">
          {/* <img src={Stairs} className="boost-stairs" /> */}
          <div className="boost-bg-image">
            <div className="boost-text-content">
              <h2 className="boost-text-heading">Cash Card & Boost</h2>
              <p className="boost-text-para">
                The Cash Card is a free, customizable debit card that lets you
                pay online and in stores. It’s the only way to get
                Boosts—instant discounts that work at places where you want to
                spend.
              </p>
            </div>
          </div>
        </div>
        <div className="boost-right-section">
          <div className="boost-bg-right">
            {/* <img src={Stairs2} className="boost-stairs2" /> */}
            <img src={HandIcon} className="boost-hand" />
            <img src={CardIcon} className="boost-card" />
            <img src={BurgerIcon} className="boost-burger" />
            <img src={CoffeeIcon} className="boost-coffee" />
            <img src={ShoeIcon} className="boost-shoe" />
            <img src={PhoneIcon} className="boost-phone" />
          </div>
        </div>
      </section>
      <section className="investing-section">
        <div className="investing-phoneViewWrapper">
          <div className="investing-stocks-content">
            <h2 style={{ fontSize: "22px", margin: "4px" }}>Stocks</h2>
            <p style={{ fontSize: "1rem", margin: "4px" }}>
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
          <div>
            <img src={PhoneStockIcon} className="investing-stock" />
            <img src={PhoneBitcoinIcon} className="investing-bitcoin" />
          </div>
          <div className="invwsting-bitcoin-content">
            <h2 style={{ fontSize: "22px", margin: "4px" }}>Bitcoin</h2>
            <p style={{ fontSize: "1rem", margin: "4px" }}>
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.
            </p>
          </div>
        </div>

        <div className="investing-section-upperside">
          <h1 style={{ fontSize: "40px", color: "#fff", paddingTop: "20px" }}>
            Investing
          </h1>
        </div>
        <div className="investing-section-downside">
          <img src={StockGraph} className="StockGraph" />
          <img src={BitcoinGraph} className="BitcoinGraph" />
          <div className="investing-media-container">
            <div className="investing-store-wrapper">
              <button className="investing store-btn">
                <img src={AppleIcon} />
                <span>app store</span>
              </button>
              <button className="investing store-btn">
                <img src={PlayStoreIcon} />
                <span>play store</span>
              </button>
            </div>

            <div className="investing-content-para-wrap">
              <p className="investing-content-para">
                Brokerage services by Cash App Investing LLC, member FINRA /
                SIPC. See our BrokerCheck. Investing involves risk; you may lose
                money. Bitcoin trading offered by Cash App. Cash App Investing
                does not trade bitcoin and Cash App is not a member of FINRA or
                SIPC. Cash App facilitates banking services through Sutton Bank
                and Lincoln Savings Bank, Members FDIC.
              </p>

              <div className="investing-social-media-wrap">
                <img src={CommentWhiteIcon} />
                <img src={TwitterWhiteIcon} />
                <img src={InstaWhiteIcon} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
