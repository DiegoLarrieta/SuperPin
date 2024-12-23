import React, { useState, useEffect } from "react";
import "./Promo.css"; // Archivo CSS para los estilos
import { NavidadPromo } from "../../assets/images";

const Promo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="promo" style={{ backgroundImage: `url(${NavidadPromo})` }}>
      <div className="promo__content">
        <div className="promo__message">
          <div>Happy Holidays</div>
          <div>Buy now and save more!</div>
        </div>
        <div className="promo__timer">{formatTime(timeLeft)}</div>
      </div>
    </div>
  );
};

export default Promo;