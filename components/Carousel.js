import Slider from "react-slick";
import Image from "next/Image";
import greenHood from "../public/greenHood.jpg";
import redTrunk from "../public/redTrunk.jpg";
import turqunderhood from "../public/turqunderhood.jpg";
import turqChassis from "../public/turqChassis.jpg";
import greenHood2 from "../public/greenHood2.jpg";

import homeStyles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";

var settings = {
  // adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  className: "center",
  slidesToShow: 1,
  dots: true,
  draggable: true,
  centerPadding: "10px",
  centerMode: true,
  pauseOnFocus: true,

  responsive: [
    {
      breakpoint: 969,
      settings: {
        centerMode: false,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
    },
    {
      breakpoint: 514,
      settings: {
        centerMode: false,

        arrows: false,
        swipe: true,
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel = () => {
  const [clicked, setClicked] = useState(false);

  function click() {
    // setClicked((current) => !current);
    console.log("click", clicked);
  }
  return (
    <div className={homeStyles.carouselContainer}>
      <div onClick={() => click()} className={`${homeStyles.carousel} ${clicked ? homeStyles.carouselLarge : ""}`}>
        <Slider {...settings}>
          <div className={homeStyles.slide}>
            <Image className={homeStyles.img} src={greenHood} alt="" srcSet="" />
          </div>
          <div className={homeStyles.slide}>
            <Image className={homeStyles.img} src={redTrunk} alt="" srcSet="" />
          </div>
          <div className={homeStyles.slide}>
            <Image className={homeStyles.img} src={turqunderhood} alt="" srcSet="" />
          </div>
          <div className={homeStyles.slide}>
            <Image className={homeStyles.img} src={turqChassis} alt="" srcSet="" />
          </div>
          <div className={homeStyles.slide}>
            <Image className={homeStyles.img} src={greenHood2} alt="" srcSet="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
