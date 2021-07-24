import React from "react";
import { Link } from "react-router-dom";
import Styleds from "./Styleds";

const ImgBg = Styleds.ImgBg;

export default function Generate(props) {

  function handleClick() {
   

    let showsInfo = {
      name: props.films.title || props.films.name,
      overview: props.films.overview ,
      poster: (props.films.poster_path !== "https://image.tmdb.org/t/p/original/null")? props.films.poster_path : props.films.backdrop_path
    };

    localStorage.setItem("showsInfo", JSON.stringify(showsInfo));
    console.log(props.films);
  }

  return (
    <Link to="/card" key={props.films.id}>
      <ImgBg
        background={(props.films.poster_path !== "https://image.tmdb.org/t/p/original/null")? props.films.poster_path : props.films.backdrop_path}
        onClick={handleClick}
        alt={props.films.title || props.films.name}
      />
    </Link>
  );
}
