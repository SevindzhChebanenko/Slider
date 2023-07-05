import React, { Component } from "react";
import Slider from "react-slick";
import Slide from "../Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

export default class PreviousNextMethods extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      customPaging: () => (
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "rgba(186, 159, 103, 0.6)",
            borderRadius: "50%",
          }}
        ></div>
      ),
    };
    return (
      <div className="container mx-auto my-28">
        <Slider {...settings}>
          <Slide />
          <Slide />
        </Slider>
      </div>
    );
  }
}
