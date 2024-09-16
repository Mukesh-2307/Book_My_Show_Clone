import React, { useState, useEffect } from "react";
import axios from "axios"

// layouts
import DefaultLayout from "../layouts/Default.layout";

// components
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import PosterSlide from "../components/PosterSlider/PosterSlider.component";

const Homepage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premiumMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const getRecommendedMovies = async() => {
      // let url = "https://api.sampleapis.com/movies/mystery";
      const apiResponse = await axios.get("https://api.sampleapis.com/movies/mystery");
      // console.log(apiResponse.data);
      setRecommendedMovies(apiResponse.data);
    }
    getRecommendedMovies();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlide
          title="Recommended Movies"
          subject="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premium-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://images.indianexpress.com/2023/06/1200px-Rupay-Logo.pngj"
              alt="rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlide
            title="Premium Movies"
            subject="Brand new releases every friday"
            posters={premiumMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="onlineStreamEvents container mx-auto px-4 md:px-12 my-8">
        <PosterSlide
          title="online Streaming Events"
          subject="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayout(Homepage);
