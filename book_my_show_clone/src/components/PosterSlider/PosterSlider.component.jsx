import React from "react";
import Slider from "react-slick";
import Poster from "../Posters/Poster.component";

const PosterSlide = (props) => {
  const { title, subject, posters, isDark, config } = props;
  const settings = {
    infinite: true,
    speed:500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-800"}`}>
          {subject}
        </p>
      </div>
      <Slider {...settings}>
        {
          posters.map((each, index) => <Poster{...each} isDark={isDark} key={index}/>)
        }
      </Slider>
    </>
  );
};

export default PosterSlide;
