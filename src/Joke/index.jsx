import React, { useState } from 'react';
import './style.css';


export const Joke = (props) => {


  const [like, setLike] = useState([props.like])
  const [dislike, setDislike] = useState([props.dislike])

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

          <button onClick={() => {
        setLike( like + 1);}} id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">{props.like}</span>

          <button onClick={() => {
        setDislike( dislike + 1);}}
          id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">{props.dislike}</span>
        </div>
      </div>
    </div>
</>
  )
}