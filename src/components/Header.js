// Функциональный компонент, отвечающий за рендер хедера

import headerLogoPath from '../images/header__logo.svg'

function Header() {
return (
    <header className="header">
      <img className="header__logo" src={headerLogoPath} alt="Логотип проекта" />
    </header>
    );

}

export default Header;