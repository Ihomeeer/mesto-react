
function Main() {


  const handleEditAvatarClick = function() {
    const avatarPopup = document.querySelector('#avatarPopup');
      avatarPopup.classList.add('popup_opened');
  }

  const handleEditProfileClick = function() {
    const profilePopup = document.querySelector('#profilePopup');
      profilePopup.classList.add('popup_opened');
  }

  const handleEditPlaceClick = function() {
    const placePopup = document.querySelector('#placePopup');
      placePopup.classList.add('popup_opened');
  }

  return (
    <main className="page">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" onClick = {handleEditAvatarClick}></button>
            </div>
            <img className="profile__avatar" src="#" alt="Аватар профиля" />
          </div>
          <div className="profile__text-section">
            <div className="profile__name-section">
              <h1 className="profile__name">Заглушка имени</h1>
              <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__function">заглушка призвания</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={handleEditPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__grid"></ul>
      </section>
    </main>
  );
}


export default Main;