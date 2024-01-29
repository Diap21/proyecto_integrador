import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="container">
      <div className="search-box">
        <i className="bx bx-search"></i>
        <input type="text" placeholder="Buscar un servicio" />
      </div>

      <div className="images">
        <div className="image-box" data-name="Almuerzo">
          <img src="images/Almuerzo.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
        <div className="image-box" data-name="Almuerzo">
          <img src="images/Almuerzo2.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
        <div className="image-box" data-name="Almuerzo">
          <img src="images/Almuerzo3.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
        <div className="image-box" data-name="Desayuno">
          <img src="images/Desayuno.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
        <div className="image-box" data-name="Desayuno">
          <img src="images/Desdayuno2.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
        <div className="image-box" data-name="Merienda">
          <img src="images/Merienda.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
        <div className="image-box" data-name="Pasabocas">
          <img src="images/Pasabocas.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
        <div className="image-box" data-name="Refrigerio">
          <img src="images/Refrigerio.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
        <div className="image-box" data-name="Reposteria">
          <img src="images/Reposteria.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
        <div className="image-box" data-name="Sanduches">
          <img src="images/Sanduches.jpg" alt="" />
          <h6>almuerzo</h6>
        </div>
      </div>

     </div>
  );
};

export default ServicesPage;
