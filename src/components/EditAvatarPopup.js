import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  
  function handleSubmit() {

  }

  return (
    <PopupWithForm name="avatar"  title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <div className="popup__input-container">
          <input type="url" name="link" id="avatarPopupLink" className="popup__input popup__avatar-url" placeholder="Ссылка на новый аватар" minLength="2" required />
          <span className="popup__error-span" id="avatarPopupLink-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;