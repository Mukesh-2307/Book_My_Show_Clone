import React from "react";
import Slider from "react-slick";
import Poster from "../Posters/Poster.component";

const PosterSlide = (props) => {
  const { title, subject, posters, isDark, config } = props;
  const settings = {};
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
          posters.map((each)=> <Poster{...each} isDark={isDark}/>)
        }
      </Slider>
    </>
  );
};

export default PosterSlide;
