import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleEditPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }


  return (
    <div className="App">

      {/* Модалка с редактированием профиля */}
      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={
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

      {/* Модалка с добавлением новой карточки */}
      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={
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

      {/* Модалка для смены аватара */}
      <PopupWithForm name="avatar"  title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={
        <>
          <div className="popup__input-container">
            <input type="url" name="link" id="avatarPopupLink" className="popup__input popup__avatar-url" placeholder="Ссылка на новый аватар" minLength="2" required />
            <span className="popup__error-span" id="avatarPopupLink-error"></span>
          </div>
        </>
      }/>

      {/* Млдалка с подтверждением удаления карточки */}
      <PopupWithForm name="confirm"  title="Вы уверены?" />

      {/* Модалка с увеличенным изображением карточки */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Header />

      {/* Блок с профилем и кнопками редактирования профиля/добавления новой карточки */}
      <Main onEditProfile={handleEditProfileClick}  onAddPlace={handleEditPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>

      <Footer />
    </div>
  );
}

export default App;