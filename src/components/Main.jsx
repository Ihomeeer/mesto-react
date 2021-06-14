// Функциональный компонент, отвечающий за рендер блока с профилем

import React from 'react';
import apiHandler from '../utils/Api';
import Card from '../components/Card';

function Main(props) {

  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Любитель проекта 'Место'");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    apiHandler.getUserInfo()
    .then ((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
    apiHandler.getDefaultCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <main className="page">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
            </div>
            <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
          </div>
          <div className="profile__text-section">
            <div className="profile__name-section">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__function">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map(card => {
            return (
              <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
            )
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;