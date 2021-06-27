// Функциональный компонент, отвечающий за рендер блока с профилем

import React from 'react';
import apiHandler from '../utils/Api';
import Card from '../components/Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {

  // хук для данных для отрисовки карточек
  const [cards, setCards] = React.useState([]);

  // контекст для данных пользователя
  const currentUser = React.useContext(CurrentUserContext);

  // отрисовка карточек при старте страницы
  React.useEffect(() => {
    apiHandler.getDefaultCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  // установка лайков/дизлайков
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    apiHandler.toggleLike(isLiked, card._id)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {console.log(err)
    })
  }

  // удаление карточек, по аналогии с лайками
  function handleCardDelete(id) {
   return apiHandler.deleteCard(id)
   .then (() => {
     setCards(cards => cards.filter(card => card._id !== id))
   })
  }

  return (
    <main className="page">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
            </div>
            <img className="profile__avatar" src={currentUser.avatar} alt="Аватар профиля" />
          </div>
          <div className="profile__text-section">
            <div className="profile__name-section">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__function">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map(card => {
            return (
              <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;