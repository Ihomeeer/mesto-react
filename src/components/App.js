import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {

  function handleEditProfileClick() {
    const profilePopup = document.querySelector('.popup_type_profile');
    console.log(profilePopup)
      profilePopup.classList.add('popup_opened');
  }

  const handleEditPlaceClick = function() {
    const placePopup = document.querySelector('.popup_type_place');
      placePopup.classList.add('popup_opened');
  }

  const handleEditAvatarClick = function() {
    const avatarPopup = document.querySelector('.popup_type_avatar');
      avatarPopup.classList.add('popup_opened');
  }

  return (
    <div className="App">
      <PopupWithForm name="profile" title="Редактировать профиль" children = {
        <>
          <div className="popup__input-container">
            <input type="text" name="name" id="profilePopupName" className="popup__input popup__name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__error-span" id="profilePopupName-error"></span>
          </div>
          <div className="popup__input-container">
            <input type="text" name="about" id="profilePopupJob" className="popup__input popup__function" placeholder="Призвание" minLength="2" maxLength="200" required />
            <span className="popup__error-span" id="profilePopupJob-error"></span>
          </div>
        </>
      }/>

      <PopupWithForm name="place" title="Новое место" children = {
        <>
          <div className="popup__input-container">
            <input type="text" name="name" id="placePopupName" className="popup__input popup__name" placeholder="Название" minLength="2" maxLength="40" required />
            <span className="popup__error-span" id="placePopupName-error"></span>
          </div>
          <div className="popup__input-container">
            <input type="url" name="link" id="placePopupLink" className="popup__input popup__function" placeholder="Ссылка на картинку" minLength="2" required />
            <span className="popup__error-span" id="placePopupLink-error"></span>
          </div>
        </>
      }/>

      <PopupWithForm name="avatar"  title="Обновить аватар" children = {
        <>
          <div className="popup__input-container">
            <input type="url" name="link" id="avatarPopupLink" className="popup__input popup__avatar-url" placeholder="Ссылка на новый аватар" minLength="2" required />
            <span className="popup__error-span" id="avatarPopupLink-error"></span>
          </div>
        </>
      }/>

      <PopupWithForm name="confirm"  title="Вы уверены?" />

      <template className="place-card" id="placeCard">
      <li className="elements__card">
        <button type="button" className="elements__delete_invisible elements__delete"></button>
        <img src="#" alt="#" className="elements__photo" />
        <div className="elements__info-panel">
          <h2 className="elements__name" id="cardName">#</h2>
          <div className="elements__like-container">
            <button type="button" className="elements__like"></button>
            <p className="elements__like-counter"></p>
          </div>
        </div>
      </li>
      </template>

      <Header />

      <Main onEditProfile = {handleEditProfileClick}  onAddPlace = {handleEditPlaceClick} onEditAvatar = {handleEditAvatarClick}/>

      <Footer />

      <ImagePopup />


    </div>
  );
}

export default App;




{/* <template className="place-card" id="placeCard">
<li className="elements__card">
  <button type="button" className="elements__delete_invisible elements__delete"></button>
  <img src="#" alt="#" className="elements__photo" />
  <div className="elements__info-panel">
    <h2 className="elements__name" id="cardName">#</h2>
    <div className="elements__like-container">
      <button type="button" className="elements__like"></button>
      <p className="elements__like-counter"></p>
    </div>
  </div>
</li>
</template>

<div className="popup"  id="profilePopup">
<form name="profile-modal" className="popup__main-form" id="profileForm" noValidate>
<button type="button" className="popup__close-button" id="profilePopupCloseBtn"></button>
  <h2 className="popup__header">Редактировать профиль</h2>
  <div className="popup__input-container">
    <input type="text" name="name" id="profilePopupName" className="popup__input popup__name" placeholder="Имя" minLength="2" maxLength="40" required />
    <span className="popup__error-span" id="profilePopupName-error"></span>
  </div>
  <div className="popup__input-container">
    <input type="text" name="about" id="profilePopupJob" className="popup__input popup__function" placeholder="Призвание" minLength="2" maxLength="200" required />
    <span className="popup__error-span" id="profilePopupJob-error"></span>
  </div>
  <button type="submit" className="popup__save-button" id="profilePopupSaveBtn" disabled>Сохранить</button>
</form>
</div>

<div className="popup"  id="placePopup">
<form name="place-modal" className="popup__main-form" id="placeForm" noValidate>
<button type="button" className="popup__close-button" id="placePopupCloseBtn"></button>
  <h2 className="popup__header">Новое место</h2>
  <div className="popup__input-container">
    <input type="text" name="name" id="placePopupName" className="popup__input popup__name" placeholder="Название" minLength="2" maxLength="40" required />
    <span className="popup__error-span" id="placePopupName-error"></span>
  </div>
  <div className="popup__input-container">
    <input type="url" name="link" id="placePopupLink" className="popup__input popup__function" placeholder="Ссылка на картинку" minLength="2" required />
    <span className="popup__error-span" id="placePopupLink-error"></span>
  </div>
  <button type="submit" className="popup__save-button" id="placePopupSaveBtn" disabled>Создать</button>
</form>
</div>

<div className="popup"  id="confirmPopup">
<form name="confirm-modal" className="popup__main-form" id="confirmForm" noValidate>
<button type="button" className="popup__close-button" id="confirmPopupCloseBtn"></button>
  <h2 className="popup__confirm-header popup__header">Вы уверены?</h2>
  <button type="submit" className="popup__save-button" id="confirmPopupSaveBtn">Да</button>
</form>
</div>

<div className="popup"  id="avatarPopup">
<form name="avatar-modal" className="popup__main-form" id="avatarForm" noValidate>
<button type="button" className="popup__close-button" id="avatarPopupCloseBtn"></button>
  <h2 className="popup__header">Обновить аватар</h2>
  <div className="popup__input-container">
    <input type="url" name="link" id="avatarPopupLink" className="popup__input popup__avatar-url" placeholder="Ссылка на новый аватар" minLength="2" required />
    <span className="popup__error-span" id="avatarPopupLink-error"></span>
  </div>
  <button type="submit" className="popup__save-button" id="avatarPopupSaveBtn" disabled>Сохранить</button>
</form>
</div> */}