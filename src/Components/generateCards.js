import React, {useState} from "react";
import { Link } from "react-router-dom";
import Styleds from "./Styleds";
import axios from 'axios'

const ImgBg = Styleds.ImgBg;

export default function Generate(props) {

  const [resume, setResume] = useState()

  let getOverview = async(id) => {
    let res  = await  axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=5f806e98f1b3ee6e498219d17b4720cc&language=en-US`);
    setResume(res.data.overview)

  }

  if(props.films.overview === ''){
    getOverview(props.films.id)
  console.log(resume)
  }

  function handleClick() {

  

    let showsInfo = {
      name: props.films.title || props.films.name,
      overview: props.films.overview || resume ,
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
