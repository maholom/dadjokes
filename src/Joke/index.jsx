import React, { useState } from 'react';
import './style.css';


export const Joke = (props) => {

const [likes, setLikes] = useState(props.likes);
const [dislikes, setDislikes] = useState(props.dislikes)


  const handleClickLike = () => {
    setLikes( likes + 1);
    }

  const handleClickDislike = () => {
    setDislikes( dislikes + 1);
  }

  return (
    <>
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={`assets/img/${props.id}.png`}/>
            <p className="user-name">{props.name}</p>
          </div>

          <p className="joke__text">{props.text}
          </p>
        </div>

        <div className="joke__likes">

          <button onClick={handleClickLike} id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">{props.likes}</span>

          <button onClick={handleClickDislike}
          id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">{props.dislikes}</span>
        </div>
      </div>
    </div>
</>
  )
}