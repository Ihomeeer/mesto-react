import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
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
  // хук для данных для отрисовки карточек
  const [cards, setCards] = React.useState([]);

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
    .catch((err) => {
      console.log(err);
    })
  }

  function handleUpdateAvatar(avatar) {
    apiHandler.setAvatar(avatar)
    .then(res => {
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err);
    })
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

  function handleAddPlaceSubmit(data) {
    return apiHandler.sendNewCard(data)
    .then ((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {console.log(err)
    })
  }

  return (
    <div className="App">

      <Header />

      <CurrentUserContext.Provider value={currentUser}>
        {/* Модалка с подтверждением удаления карточки */}
        <PopupWithForm name="confirm"  title="Вы уверены?" />

        {/* Модалка с увеличенным изображением карточки */}
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        {/* Модалка для смены аватара */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        {/* Модалка с редактированием профиля */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        {/* Модалка с добавлением новой карточки */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleAddPlaceSubmit}
        />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleEditPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          initialCards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onCardClick={handleCardClick}
        />
      </CurrentUserContext.Provider>

      <Footer />
    </div>
  );
}

export default App;