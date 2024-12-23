import { LogoBlanco, SearchIcon, ShopIcon} from "../../assets/images";
import React, { useState } from "react";
import animationData from "../../assets/Icons/hamburger.json"
import "./Header.css"; // Archivo CSS para los estilos
import Lottie from "react-lottie";

const Header: React.FC = () => {

  const [isStopped, setIsStopped] = useState(true);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleIconClick = () => {
    setIsStopped(!isStopped);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={LogoBlanco} alt="Logo" />
      </div>
      <div className="header__title-container">
        <div className="header__title">SUPER</div>
        <div className="header__title">PIN</div>
      </div>
      <div className="header__icons">
        <button className="icon-button" onClick={handleIconClick}>
          <div className="lottie-container">
            <Lottie options={defaultOptions} isStopped={isStopped} height={24} width={24} />
          </div>
        </button>
        <button className="icon-button">
          <img src={ShopIcon} alt="Carrito de Compras" className="icon-image" />
        </button>
      </div>
    </header>
  );
};

export default Header;

