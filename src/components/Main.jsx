import React from 'react';
import apiHandler from '../utils/Api';

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
  })

  return (
    <main className="page">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" onClick = {props.onEditAvatar}></button>
            </div>
            <img className="profile__avatar" src={userAvatar} alt="Аватар профиля" />
          </div>
          <div className="profile__text-section">
            <div className="profile__name-section">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit-button" onClick = {props.onEditProfile}></button>
            </div>
            <p className="profile__function">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick = {props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
        {cards.map(card => {
          return (
            <li key = {card._id} className="elements__card">
            <button type="button" className="elements__delete_invisible elements__delete"></button>
            <img src={card.link} alt={card.name} className="elements__photo" />
            <div className="elements__info-panel">
              <h2 className="elements__name" id="cardName">{card.name}</h2>
              <div className="elements__like-container">
                <button type="button" className="elements__like"></button>
                <p className="elements__like-counter">{card.likes.length}</p>
              </div>
            </div>
          </li>
          );
        })}




        </ul>
      </section>
    </main>
  );
}

export default Main;