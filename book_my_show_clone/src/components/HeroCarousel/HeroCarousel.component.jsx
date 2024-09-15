import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      url: "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg",
      name: "wanda-vison",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQah7rvAdEmDnkxXIIQ0KqbE0gjKPQvnL77xQ&s",
      name: "moonlight",
    },
    {
      url: "https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
      name: "lagan",
    },
    {
      url: "https://www.tallengestore.com/cdn/shop/products/Art_Poster_-_Sicario_-_Tallenge_Hollywood_Collection_large.jpg?v=1505077648",
      name: "Sicario",
    },
    {
      url: "https://i.ebayimg.com/images/g/NpcAAOSwisVlcP8H/s-l1600.jpg",
      name: "fast and furious",
    },
  ]);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

  let settingsLarge = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
  return (
    <>
      <div className="px-8 bg-slate-800 lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => {
            return (
              <div className="w-full h-56 md:h-80 py-3">
                <img
                  src={image.url}
                  alt="heor banner"
                  className="w-full h-full rounded-md object-contain"
                />
              </div>
            );
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block w-70 px-10 bg-slate-800">
        <HeroSlider {...settingsLarge}>
          {images.map((image) => {
            return (
              <div className="w-full h-96 px-2 py-3">
                <img
                  src={image.url}
                  alt="heor banner"
                  className="w-full h-full rounded-md object-contain"
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
