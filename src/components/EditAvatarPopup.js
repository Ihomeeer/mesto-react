import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup(props) {

  // записываем объект, возвращаемый хуком, в переменную, которая будет связана с аватаром
  const avatarRef = React.useRef();

  // отправка формы, обновление аватара через реф, завязанный на инпут в самой форме
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(
      avatarRef.current.value
    );
  }

  return (
    <PopupWithForm name="avatar"  title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <div className="popup__input-container">
          <input type="url" name="link" id="avatarPopupLink" className="popup__input popup__avatar-url" ref={avatarRef} placeholder="Ссылка на новый аватар" minLength="2" required />
          <span className="popup__error-span" id="avatarPopupLink-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;