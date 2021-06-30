import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {

  // хук для модалки с изменением профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  // хук для открытия модалки с добавлением карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // хук для открытия модалки со сменой аватара
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  // хук для открытия модалки с подтверждением удаления
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  // хук для модалки с зумом
  const [selectedCard, setSelectedCard] = React.useState({});
  // хук для модалки с подтверждением удаления карточки
  const[selectedCardDelete, setSelectedCardDelete] = React.useState({});
  // хук для данных пользователя
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
    cohort: "",
    _id: ""
  });
  // хук для данных для отрисовки карточек
  const [cards, setCards] = React.useState([]);


  // открытие модалки профиля
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  // открытие модалки добавления карточки
  const handleEditPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  // открытие модалки аватара
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  // открытие модалки с зумом
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  // открытие модалки с подтверждением удаления карточки
  const handleDeleteConfirmClick = (card) => {
    setSelectedCardDelete(card)
    setIsConfirmPopupOpen(true)
  }
  // закрытие всех модалок оптом
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({});
    setSelectedCardDelete({});
  }

  // функция для обновления данных пользователя
  function handleUpdateUser({name, about}) {
    api.sendUserInfo({name, about})
    .then((res) => {
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err);
    })
  }
  // функция для обновления аватара пользователя
  function handleUpdateAvatar(avatar) {
    api.setAvatar(avatar)
    .then(res => {
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // функция для добавления карточки и перерисовывания массива с новой карточкой
  function handleAddPlaceSubmit(data) {
    return api.sendNewCard(data)
    .then ((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {console.log(err)
    })
  }
  // установка лайков/дизлайков для карточек
  function handleCardLike(card) {
    // проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.toggleLike(isLiked, card._id)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {console.log(err)
    })
  }
  // подтверждение удаления карточки
  function handleConfirmSubmit() {
    return api.deleteCard(selectedCardDelete)
    .then (() => {
      setCards(cards => cards.filter(card => card._id !== selectedCardDelete));
      closeAllPopups();
    })
    .catch((err) => {console.log(err)
    })
  }


  // получение информации о пользователе и массива карточек при отрисовке страницы
  React.useEffect(() => {
  Promise.all([api.getUserInfo(), api.getDefaultCards()])
  .then(([userInfo, defaultCards]) => {
    setCurrentUser(userInfo);
    setCards(defaultCards)
  })
  .catch(error => console.log(error));
  }, [])


  return (
    <div className="App">

      <Header />

      <CurrentUserContext.Provider value={currentUser}>
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
        {/* Модалка с подтверждением удаления карточки */}
        <ConfirmDeletePopup
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onDelete={handleConfirmSubmit}
        />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleEditPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteConfirmClick}
          onCardClick={handleCardClick}
        />
      </CurrentUserContext.Provider>

      <Footer />
    </div>
  );
}

export default App;