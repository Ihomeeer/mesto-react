import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
        <template className="place-card" id="placeCard">
        <li className="elements__card">
          <button type="button" className="elements__delete_invisible elements__delete"></button>
          <img src="#" alt="#" className="elements__photo" />
          <div className="elements__info-panel">
            <h2 className="elements__name" id="cardName"></h2>
            <div className="elements__like-container">
              <button type="button" className="elements__like"></button>
              <p className="elements__like-counter"></p>
            </div>
          </div>
        </li>
      </template>

      <div className="popup"  id="profilePopup">
        <button type="button" className="popup__close-button popup__close-button_type_form" id="profilePopupCloseBtn"></button>
        <form name="profile-modal" className="popup__main-form" id="profileForm" noValidate>
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
        <button type="button" className="popup__close-button popup__close-button_type_form" id="placePopupCloseBtn"></button>
        <form name="place-modal" className="popup__main-form" id="placeForm" noValidate>
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

      <div className="popup" name="photo-modal" id="photoPopup">
        <div className="popup__form-container">
          <button type="button" className="popup__close-button popup__close-button_type_photo" id="photoPopupCloseBtn"></button>
          <figure className="popup__image-container">
            <img src="#" alt="#" className="popup__photo" />
            <figcaption className="popup__photo-name"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup"  id="confirmPopup">
        <button type="button" className="popup__close-button popup__close-button_type_confirm" id="confirmPopupCloseBtn"></button>
        <form name="confirm-modal" className="popup__main-form" id="confirmForm" noValidate>
          <h2 className="popup__confirm-header popup__header">Вы уверены?</h2>
          <button type="submit" className="popup__save-button" id="confirmPopupSaveBtn">Да</button>
        </form>
      </div>
      
      <div className="popup"  id="avatarPopup">
        <button type="button" className="popup__close-button popup__close-button_type_avatar" id="avatarPopupCloseBtn"></button>
        <form name="avatar-modal" className="popup__main-form" id="avatarForm" noValidate>
          <h2 className="popup__header">Обновить аватар</h2>
          <div className="popup__input-container">
            <input type="url" name="link" id="avatarPopupLink" className="popup__input popup__avatar-url" placeholder="Ссылка на новый аватар" minLength="2" required />
            <span className="popup__error-span" id="avatarPopupLink-error"></span>
          </div>
          <button type="submit" className="popup__save-button" id="avatarPopupSaveBtn" disabled>Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default App;
