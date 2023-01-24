import React from "react";
import BookBtn from "../LayoutUI/BookBtn";
import Link from "next/link";
import Script from "next/script";
const Hero = () => {
  return (
    <>
      {/* <Script
        strategy="beforeInteractive"
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
        form_url="https://clienthub.getjobber.com/client_hubs/2f0de348-75ef-4583-bf91-f83911c3f4d6/public/work_request/embedded_dialog_work_request_form"
        clienthub_id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
      /> */}
      <div className="hero">
        <div className="container">
          <div className="hero__info">
            <h1>Get Expert Cleaning for Your Home or Business Now</h1>
            <p>
              We take cleaning to another level with Eco-Friendly products. We
              guarantee to make Your Space Sparkling and Enjoyable or your Money
              Back.
            </p>
            {/* <div className="header-btn">
              <BookBtn />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
