import React, { useEffect, useRef, useState } from "react";
import "./Titlecards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzZjZmY1ZjAzZjIxZjM4N2VkZDg0MzMxZGE0MjNlMyIsIm5iZiI6MTcyMjM5MzE0OS40ODg1MSwic3ViIjoiNjZhOWExOWVmOTJkMDE0MjY0NTlkNzY3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BdXH90ukfhZoMo0qZEv9aQpm42yobJb_v78SyVigN0I",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`, options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="title__cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card__list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <>
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + card.backdrop_path}
                  alt=""
                />
                <p>{card.original_title}</p>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};


export default TitleCards;

