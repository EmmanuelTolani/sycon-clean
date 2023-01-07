import React from "react";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h1>Our Services</h1>
        <div className="services__services">
          <div className="services__service">
            <img src="../img/main/cleaning.jpeg" alt="cleaning services" />
            <p>House Cleaning</p>
          </div>
          <div className="services__service">
            <img src="../img/gall-6.png" alt="interior window cleaning" />
            <p>Interior Window Cleaning</p>
          </div>
          <div className="services__service">
            <img src="../img/main/dish-wash.jpeg" alt="dish washing services" />
            <p>Dish Washing</p>
          </div>
          <div className="services__service">
            <img src="../img/main/laundry.jpeg" alt="laundry system services" />
            <p>Laundry Services</p>
          </div>
          <div className="services__service">
            <img src="../img/main/carpet-clean.jpeg" alt="carpet cleaning" />
            <p>Carpet Cleaning</p>
          </div>
          <div className="services__service">
            <img
              src="../img/main/int-clean.webp"
              alt="interior cleaning services"
            />
            <p>Interior Cleaning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
