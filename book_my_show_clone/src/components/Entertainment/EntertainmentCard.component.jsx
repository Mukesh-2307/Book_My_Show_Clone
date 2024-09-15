import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div>
        <img
          src={props.src}
          alt="Entertainment"
          className="w-96 h-96 rounded-lg"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg"
    ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQah7rvAdEmDnkxXIIQ0KqbE0gjKPQvnL77xQ&s"
    ,
    "https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
    ,
    "https://www.tallengestore.com/cdn/shop/products/Art_Poster_-_Sicario_-_Tallenge_Hollywood_Collection_large.jpg?v=1505077648"
    ,
    "https://i.ebayimg.com/images/g/NpcAAOSwisVlcP8H/s-l1600.jpg"
    ,
  ];

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
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image) => (
          <EntertainmentCard src={image} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;
