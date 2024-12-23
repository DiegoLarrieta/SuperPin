import React from "react";
import "./Content.css"; // Archivo CSS para los estilos
import { SPin6 } from "../../assets/images";

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="content__image">
        <img src={SPin6} alt="Product" />
      </div>
      <div className="content__info">
        <h2>Product Name</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec orci varius, nec tincidunt ligula tincidunt. Integer nec libero nec nulla facilisis tincidunt.</p>
        <p>Price: $99.99</p>
        <button className="content__button">Buy Now</button>
      </div>
    </div>
  );
};

export default Content;