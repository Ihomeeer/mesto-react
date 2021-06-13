import React from 'react';

function PopupWithForm(props) {
  return (
<div className={`popup ${props.isOpen ? 'popup_opened' : `popup_type_${props.name}`}`}>
      <form name={props.name} className="popup__main-form" noValidate>
        <button type="button" className="popup__close-button"></button>
        <h2 className="popup__header">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__save-button" disabled>Сохранить</button>
      </form>
    </div>
  );

}

export default PopupWithForm;