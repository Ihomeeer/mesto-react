// Функциональный компонент, отвечающий за рендер карточек с данными, получаемыми с сервера

import React from 'react';
function Card(props) {

  const handleClick = () => {
    props.onCardClick(props.card);
  }

  return (
    <li key={props.card._id} className="elements__card">
    <button type="button" className="elements__delete_invisible elements__delete"></button>
    <img src={props.card.link} alt={props.card.name} className="elements__photo" onClick={handleClick} />
    <div className="elements__info-panel">
      <h2 className="elements__name" id="cardName">{props.card.name}</h2>
      <div className="elements__like-container">
        <button type="button" className="elements__like"></button>
        <p className="elements__like-counter">{props.card.likes.length}</p>
      </div>
    </div>
  </li>
  )
}

export default Card;