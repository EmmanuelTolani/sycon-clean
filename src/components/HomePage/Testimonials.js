import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="testimonials__info">
          <h1>What Our Customers Are Saying.</h1>
          <p>
            Don’t just take our word for it, we offer the best cleaning services
            of all kinds at a very affordable rate and our customers can
            testify.
          </p>
        </div>
        <div className="testimonials__reviews">
          <div class="testimonials__review">
            <p>
              “Sycon is simply the best out there. I came back from my travels
              and was so tired to clean my house as there were several rooms but
              thanks to the Synco team. I placed a quote and my house was clean
              within a couple of hours.”
            </p>
            <div className="testimonials__review-customer">
              <img src="../img/customer-img.png" alt="" />
              <span>Lisa Ann</span>
            </div>
          </div>
          <div class="testimonials__review">
            <p>
              “Sycon is simply the best out there. I came back from my travels
              and was so tired to clean my house as there were several rooms but
              thanks to the Synco team. I placed a quote and my house was clean
              within a couple of hours.”
            </p>
            <div className="testimonials__review-customer">
              <img src="../img/customer-img.png" alt="" />
              <span>Lisa Ann</span>
            </div>
          </div>
          <div class="testimonials__review">
            <p>
              “Sycon is simply the best out there. I came back from my travels
              and was so tired to clean my house as there were several rooms but
              thanks to the Synco team. I placed a quote and my house was clean
              within a couple of hours.”
            </p>
            <div className="testimonials__review-customer">
              <img src="../img/customer-img.png" alt="" />
              <span>Lisa Ann</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
