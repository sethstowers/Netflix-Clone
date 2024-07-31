import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const Player = ({cards}) => {
const {id} = useParams();
const navigate = useNavigate();

  const [apiData, setApiData] = useState({});
  const [movieTitle, setMovieTitle] = useState('');

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzZjZmY1ZjAzZjIxZjM4N2VkZDg0MzMxZGE0MjNlMyIsIm5iZiI6MTcyMjM5MzE0OS40ODg1MSwic3ViIjoiNjZhOWExOWVmOTJkMDE0MjY0NTlkNzY3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BdXH90ukfhZoMo0qZEv9aQpm42yobJb_v78SyVigN0I",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
    console.log(apiData);

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then(response => response.json())
    .then(response => setMovieTitle(response.original_title))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="player">
      <Link to={'/'}><img src={back_arrow_icon}  alt="" /></Link>
      <iframe
        title="trailer"
        frameborder="0"
        allowFullScreen
        width="90%"
        height="90%"
        src={`https://youtube.com/embed/${apiData.key}`}
      ></iframe>
      <div className="player__info">

        <p>{movieTitle}</p>

      </div>
    </div>
  );
};

export default Player;
