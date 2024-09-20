import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

const EntertainmentCard = (props) => {

  return (
    <>
      <div>
        <img
          src={props.src}
          alt="Entertainment"
          className="w-96 h-96 rounded-lg"
          // Extras
          onError={(e) => {
            e.currentTarget.src =
              "https://www.tgsin.in/images/joomlart/demo/default.jpg";
          }}
          id={props.imdbId}
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const url = "https://api.sampleapis.com/movies/western"
        const response = await axios.get(url);
        // console.log(response.data.result.data);
        setMovieList(response.data);
      } catch (err) {
        setMovieList(err.message);
      }
    };
    getMovieList();
  }, []);

  // ************************ test code ***************************
 
  // {
  //   MovieList.map((movie) => {
  //     console.log(movie.Title);
  //   });
  // }

  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
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
      <Slider {...settings}>
        {MovieList.map((movie,index) => (
          <EntertainmentCard src={movie.posterURL} imdbId={movie.imdbId} key={index}/>
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
