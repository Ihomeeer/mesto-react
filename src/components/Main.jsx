import React from 'react';
function Main(props) {

  return (
    <main className="page">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" onClick = {props.onEditAvatar}></button>
            </div>
            <img className="profile__avatar" src="#" alt="Аватар профиля" />
          </div>
          <div className="profile__text-section">
            <div className="profile__name-section">
              <h1 className="profile__name">Заглушка имени</h1>
              <button type="button" className="profile__edit-button" onClick = {props.onEditProfile}></button>
            </div>
            <p className="profile__function">заглушка призвания</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick = {props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__grid"></ul>
      </section>
    </main>
  );
}


export default Main;