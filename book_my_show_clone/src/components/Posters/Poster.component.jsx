import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <>
      <Link to={`/movie/${props.imdbId}`}>
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
          <div className="h-40 md:h-80">
            <img
              src={props.posterURL}
              alt="poster"
              className="w-full h-full rounded-md"
              onError={(e) => {
                e.currentTarget.src =
                  "https://www.tgsin.in/images/joomlart/demo/default.jpg";
              }}
            />
          </div>
          <h3 className={`text-lg font-bold ${props.isDark ? "text-white": "text-gray-700"}`}>{props.title}</h3>
        </div>
      </Link>
      {/* {props.title} */}
    </>
  );
};

export default Poster;
