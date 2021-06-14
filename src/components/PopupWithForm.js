// Функциональный компонент, отвечающий за рендер всех модалок с формами

import React from 'react';

function PopupWithForm(props) {
  return (
<div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : "" }`}>
      <form name={props.name} className="popup__main-form" noValidate>
        <button onMouseDown={props.onClose} type="button" className="popup__close-button"></button>
        <h2 className="popup__header">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__save-button" disabled>Сохранить</button>
      </form>
    </div>
  );

}

export default PopupWithForm;