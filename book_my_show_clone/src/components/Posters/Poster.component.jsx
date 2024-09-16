import React from 'react'
import {Link} from "react-router-dom"

const Poster = (props) => {
  return (
    <>
    <Link to={`/movie/${props.imdbId}`}>Movies</Link>
      {/* {props.title} */}
    </>
  )
}

export default Poster
