import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.component";
import axios from "axios"

const HeroCarousel = () => {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
  
    const getMovieList = async () => {
      try {
        // const url1= "https://www.omdbapi.com/?apikey=1bc5b78a&s=kill&plot=full";
        const url2 = "https://api.sampleapis.com/movies/animation"
        const response = await axios.get(url2);
        // console.log(response.data);
        setMovieList(response.data);
      } catch (err) {
        setMovieList(err.message);
      }
    };
    getMovieList();
  }, []);

  // just to check whether the api call is working or not
  // {
  //   MovieList.map((movie)=>{
  //     console.log(movie);
  //   })
  // }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  let settingsLarge = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="px-8 bg-slate-800 lg:hidden">
        <HeroSlider {...settings}>
          {MovieList.map((movie, index) => {
            return (
              <div className="w-full h-56 md:h-80 py-3" key={index}>
                <img
                  src={movie.posterURL}
                  alt="heor banner"
                  className="w-full h-full rounded-md object-contain"
                  // Extras
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://www.tgsin.in/images/joomlart/demo/default.jpg";
                  }}
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block w-70 px-10 bg-slate-800">
        <HeroSlider {...settingsLarge}>
          {MovieList.map((movie, index) => {
            return (
              <div className="w-full h-96 px-2 py-3" key={index}>
                <img
                  src={movie.posterURL}
                  alt="heor banner"
                  className="w-full h-full rounded-md object-contain"
                  // Extras
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://www.tgsin.in/images/joomlart/demo/default.jpg";
                  }}
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
