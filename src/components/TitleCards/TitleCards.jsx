import React, { useRef,useEffect,useState } from "react";
import "./TitleCards.css";

import { Link } from "react-router-dom";
export default function TitleCards({title,category}) {
  const [apiData,setApiData]=useState([]);
const card_ref=useRef();
const handleWheel=(e)=>{
  e.preventDefault();
  card_ref.current.scrollLeft+=e.deltaY
}
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2RlNTRlYmJlOTM0ZWQ3MTIzYWFjYTY3Y2UyODZiOSIsIm5iZiI6MTc0MDE5NDExNy44NjA5OTk4LCJzdWIiOiI2N2I5NDE0NWI5NzM2N2ZjZDQwYTY4YmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z9mwEDf8hrA2RnerWv7fIlS9GPJCsL-D6nBKSiYEToQ'
  }
};
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category? category : "now_playing"}?language=en-US&page=1`, options)
  .then(res=>res.json())
  .then(data=>setApiData(data.results))
  .catch(err=>console.log(err))
  card_ref.current.addEventListener("wheel",handleWheel)
},[])
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cards-list" ref={card_ref}>
        {apiData?.map((card,index)=>{
          return (  <Link to={`player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="card-img" />
          <h3>{card.original_title}</h3>
        </Link>
        )})}
      </div>
    </div>
  );
}
