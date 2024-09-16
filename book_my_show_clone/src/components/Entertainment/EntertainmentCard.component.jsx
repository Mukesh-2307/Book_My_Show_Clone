import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  // const fallBackSrc = "https://www.tgsin.in/images/joomlart/demo/default.jpg";

  return (
    <>
    {/* Code for sample APIs */}
      {/* <div>
        <img
          src={props.src}
          alt="Entertainment"
          className="w-96 h-96 rounded-lg"
          // Extras
          onError={(e) => {
            e.currentTarget.src =
              "https://www.tgsin.in/images/joomlart/demo/default.jpg";
          }}
        />
      </div> */}

      {/* Code for OMDb APIs */}
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
  const getMovieList = async () => {
    try {
      // let url = "https://api.sampleapis.com/movies/mystery";
      let url = "https://www.omdbapi.com/?apikey=1bc5b78a&s=kill&type=movie"
      const data = await fetch(url);
      const json = await data.json();
      // console.log(json.Search);
      setMovieList(json.Search);
    } catch (err) {
      setMovieList(err.message);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  // ************************ test code ***************************
  /* Code for sample APIs */
  // {
  //   MovieList.map((movie) => {
  //     console.log(movie.posterURL);
  //   });
  // }

  // ************************ test code ***************************
  /* Code for sample APIs */
  // {
  //   MovieList.map((movie) => {
  //     console.log(movie.Title);
  //   });
  // }

  // ********************* dummy data *****************************
  // const EntertainmentImage = [
  //   "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg"
  //   ,
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQah7rvAdEmDnkxXIIQ0KqbE0gjKPQvnL77xQ&s"
  //   ,
  //   "https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
  //   ,
  //   "https://www.tallengestore.com/cdn/shop/products/Art_Poster_-_Sicario_-_Tallenge_Hollywood_Collection_large.jpg?v=1505077648"
  //   ,
  //   "https://i.ebayimg.com/images/g/NpcAAOSwisVlcP8H/s-l1600.jpg"
  //   ,
  // ];

  const settings = {
    infinite: true,
    autoplay: false,
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
    {/* Code for sample APIs */}
      {/* <Slider {...settings}>
        {MovieList.map((movie) => (
          <EntertainmentCard src={movie.posterURL} />
        ))}
      </Slider> */}

      {/* code for OMDb APIs */}
      <Slider {...settings}>
        {MovieList.map((movie,index) => (
          <EntertainmentCard src={movie.Poster} imdbId={movie.imdbId} key={index}/>
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
