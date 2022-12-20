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
          <div className="testimonials__review">
            <p>
              “SYCON is simply the best out there. I came back from my travels
              and was so tired to clean my house as there were several rooms but
              thanks to the Synco team. I placed a quote and my house was clean
              within a couple of hours.”
            </p>
            <div className="testimonials__review-customer">
              <img src="../img/customer-img.png" alt="customer review" />
              <p>Lisa Ann</p>
            </div>
          </div>
          <div className="testimonials__review">
            <p>
              "I was skeptical at first about hiring a cleaning company, but it
              has ended up being one of the best decisions I've made. It has
              saved me so much time and stress, allowing me to focus on other
              important tasks. The team is always reliable and does a thorough
              job. I highly recommend giving a cleaning company a try - it's
              worth every penny."
            </p>
            <div className="testimonials__review-customer">
              <img
                src="https://www.thinkcompany.com/wp-content/uploads/2014/04/Greg.jpg"
                alt="customer review"
              />
              <p>Greg Griener</p>
            </div>
          </div>
          <div className="testimonials__review">
            <p>
              “SYCON has exceeded my expectations! Their team is professional,
              reliable, and truly cares about delivering top-notch service. My
              home has never looked cleaner. I highly recommend Sycon Clean for
              anyone seeking exceptional cleaning services.”
            </p>
            <div className="testimonials__review-customer">
              <img
                src="https://miro.medium.com/fit/c/176/176/1*U2qzUx9iGlbQoEufatiNwg.jpeg"
                alt="customer review"
              />
              <p>Emmanuel Tolani</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
