// Функциональный компонент, отвечающий за рендер карточек с данными, получаемыми с сервера
import CurrentUserContext from '../contexts/CurrentUserContext';

import React from 'react';
import ConfirmDeletePopup from './ConfirmDeletePopup';
function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `${isOwn ? 'elements__delete' : 'elements__delete_invisible'}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `elements__like ${isLiked ? 'elements__like_active' : ''}`
  );

  const handleClick = () => {
    props.onCardClick(props.card);
  }

  const handleLike = () => {
    props.onCardLike(props.card);
  }

  const handleDelete = () => {
    props.onCardDelete(props.card._id);
  }

  return (
    <li key={props.card._id} className="elements__card">
    <button type="button" className={cardDeleteButtonClassName} onClick={handleDelete}></button>
    <img src={props.card.link} alt={props.card.name} className="elements__photo" onClick={handleClick} />
    <div className="elements__info-panel">
      <h2 className="elements__name" id="cardName">{props.card.name}</h2>
      <div className="elements__like-container">
        <button type="button" className={cardLikeButtonClassName} onClick={handleLike}></button>
        <p className="elements__like-counter">{props.card.likes.length}</p>
      </div>
    </div>
  </li>
  )
}

export default Card;