import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ id }) => id);

  // console.log(genres);
  return <div>MovieHero</div>;
};

export default MovieHero;