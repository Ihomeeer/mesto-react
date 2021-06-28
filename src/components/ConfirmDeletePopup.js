import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup(props) {

  function handleSubmit(e) {

  }
  return (
    <PopupWithForm name="confirm"  title="Вы уверены?" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} />
  )
}

export default ConfirmDeletePopup;