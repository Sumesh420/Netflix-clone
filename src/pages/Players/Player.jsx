import React, { useEffect, useState } from 'react'
import "./Player.css"
import backArrowIcon from "../../assets/back_arrow_icon.png"
import { useParams , useNavigate} from 'react-router-dom'
export default function Player() {
  const [apiData,setApiData]=useState({
    "name":"",
    "key":"",
    "published_at":"",
    "typeof":""
  })
  const {playerid}=useParams();
  const navigate=useNavigate();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2RlNTRlYmJlOTM0ZWQ3MTIzYWFjYTY3Y2UyODZiOSIsIm5iZiI6MTc0MDE5NDExNy44NjA5OTk4LCJzdWIiOiI2N2I5NDE0NWI5NzM2N2ZjZDQwYTY4YmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z9mwEDf8hrA2RnerWv7fIlS9GPJCsL-D6nBKSiYEToQ'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${playerid}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(data=>setApiData(data.results[0]))
      .catch(err => console.error(err));
  },[])
  return (
    <div className='player'>
      <img src={backArrowIcon} alt="back-arrow" onClick={()=>navigate(-2)}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" height="90%" frameborder="0" title="trailer" allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
     
    </div>
  )
}
