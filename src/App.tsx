import React from "react";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import  ModelViewer from "./components/ModelViewer/ModelViewer";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import "./App.css"; // Archivo CSS para los estilos globales

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Promo />
      <ModelViewer modelPath="/models/cartera.glb" /> {/* Update the path to your model file */}
      <Content />
      {/* Other components */}
      <Footer/>
    </div>
  );
};

export default App;