import React from 'react';
function ImagePopup() {
  return (
    <div className="popup" name="popup_type_photo" id="photoPopup">
      <div className="popup__form-container">
        <button type="button" className="popup__close-button popup__close-button_type_photo" id="photoPopupCloseBtn"></button>
        <figure className="popup__image-container">
          <img src="#" alt="#" className="popup__photo" />
          <figcaption className="popup__photo-name"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;