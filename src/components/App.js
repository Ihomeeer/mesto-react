import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupWithForm from './PopupWithForm';
import apiHandler from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({
    name: "Жак-Ив Кусто",
    about: "Мореплаватель",
    avatar: "",
    cohort: "",
    _id: ""
  });

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

  function handleUpdateUser({name, about}) {
    apiHandler.sendUserInfo({name, about})
    .then((res) => {
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch((err) => console.log(err))
  }

  function handleUpdateAvatar() {

  }


  React.useEffect(() => {
    apiHandler.getUserInfo()
    .then((res) => {
      setCurrentUser(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <div className="App">

      {/* Модалка с добавлением новой карточки */}
      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} >
        <div className="popup__input-container">
            <input type="text" name="name" id="placePopupName" className="popup__input popup__name" placeholder="Название" minLength="2" maxLength="40" required />
            <span className="popup__error-span" id="placePopupName-error"></span>
          </div>
          <div className="popup__input-container">
            <input type="url" name="link" id="placePopupLink" className="popup__input popup__function" placeholder="Ссылка на картинку" minLength="2" required />
            <span className="popup__error-span" id="placePopupLink-error"></span>
        </div>
      </PopupWithForm>




      {/* Млдалка с подтверждением удаления карточки */}
      <PopupWithForm name="confirm"  title="Вы уверены?" />

      {/* Модалка с увеличенным изображением карточки */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Header />

      {/* Блок с профилем и кнопками редактирования профиля/добавления новой карточки */}
      <CurrentUserContext.Provider value={currentUser}>

        {/* Модалка для смены аватара */}
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateAvatar}/>

        {/* Модалка с редактированием профиля */}
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

        <Main onEditProfile={handleEditProfileClick}  onAddPlace={handleEditPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>

      </CurrentUserContext.Provider>

      <Footer />
    </div>
  );
}

export default App;