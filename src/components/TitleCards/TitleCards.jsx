import React, { useRef,useEffect } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
export default function TitleCards({title}) {
const card_ref=useRef();
const handleWheel=(e)=>{
  e.preventDefault();
  card_ref.current.scrollLeft+=e.deltaY
}
useEffect(()=>{
  card_ref.current.addEventListener("wheel",handleWheel)
},[])
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cards-list" ref={card_ref}>
        {cards_data.map((card,index)=>{
          return (  <div className="card" key={index}>
          <img src={card.image} alt="card-img" />
          <h3>{card.name}</h3>
         
        </div>
        )})}
      </div>
    </div>
  );
}
