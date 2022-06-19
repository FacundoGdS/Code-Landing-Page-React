import React from "react";
import Faro from "../../img/faro.jpg";
import Photo from "../../img/photo.jpg";
import Puente from "../../img/puente.jpg";

//Technically this is a carousel bootstrap component, but the 5.1.3 version has no more jumbotron option
//So I took this component as a replacement...

export const Jumbotron = () => {
    return (
        <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Faro} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Photo} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Puente} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>);
};