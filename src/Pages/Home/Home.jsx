import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../../public/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";
import Footer from "../../Components/Footer/Footer";
import CobraKaiBanner from '../../assets/Cobra-Kai-Banner.avif'
import CobraKaiNetflix from '../../assets/cobrakai_netflix_logo.webp'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={CobraKaiBanner} alt="" className="banner__img" />
        <div className="hero__caption">
          <img src={CobraKaiNetflix} alt="" className="caption__img" />
          
          <div className="hero__btns">
            <button className="btn"><img src={play_icon} alt="" />Play</button>
            <button className="btn dark__btn"><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more__cards">
        <TitleCards title={"Blockbuster Movies"} category={'top_rated'}/>
        <TitleCards title={"Only on Netflix"} category={'popular'}/>
        <TitleCards title={"Upcoming"} category={'upcoming'}/>
        <TitleCards title={"Top Picks for You"} category={'now_playing'}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
