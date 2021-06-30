import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  //рефы для имени и линка карточки
  const nameRef = React.useRef();
  const linkRef = React.useRef();


  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    //отправляем данные из инпутов
    props.onSubmit({
      name: nameRef.current.value,
      link: linkRef.current.value
    })

  }

  //очистка инпутов модалки после отправления данных на сервер
  React.useEffect(() => {
    nameRef.current.value =""
    linkRef.current.value =""
  }, [props, props.onSubmit])

  return (
    <PopupWithForm name="place" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonName="Сохранить">
      <div className="popup__input-container">
          <input type="text" name="name" id="placePopupName" className="popup__input popup__name" ref={nameRef} placeholder="Название" minLength="2" maxLength="40" required />
          <span className="popup__error-span" id="placePopupName-error"></span>
        </div>
        <div className="popup__input-container">
          <input type="url" name="link" id="placePopupLink" className="popup__input popup__function" ref={linkRef} placeholder="Ссылка на картинку" minLength="2" required />
          <span className="popup__error-span" id="placePopupLink-error"></span>
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;