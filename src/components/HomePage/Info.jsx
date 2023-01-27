import React from "react";
import Link from "next/link";
import BookBtn from "../LayoutUI/BookBtn";
import Script from "next/script";
const Info = () => {
  return (
    <>
      {/* <Script
        strategy="beforeInteractive"
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
        form_url="https://clienthub.getjobber.com/client_hubs/2f0de348-75ef-4583-bf91-f83911c3f4d6/public/work_request/embedded_dialog_work_request_form"
        clienthub_id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
      /> */}
      <div className="info">
        <div className="container">
          <div className="info__left">
            <h1>The backbone of cleaning services in Canada.</h1>
            <p>
              Are you feeling overwhelmed and anxious about the cleanliness of
              your home or business? Do you fear that germs and bacteria are
              lurking in every corner, threatening the health and safety of you
              and those around you.{" "}
            </p>
            <p>
              Don&apos;t let fear control your life any longer. Our professional
              cleaning services can give you the peace of mind you deserve. Our
              team of experts uses the latest techniques and products to
              thoroughly sanitize and disinfect your space, leaving it sparkling
              clean and free from harmful contaminants.
            </p>
            <p>
              Let us take the burden off your shoulders and give you the gift of
              a clean and healthy environment. Contact us today and let us help
              you conquer your fears.
            </p>
            <div>
              <BookBtn />
            </div>
          </div>
          <div className="info__right">
            <img src="../img/icons/canada-map.png" alt="canadian map"></img>
            <div className="info__canada-leaf">
              <img src="../img/icons/canada-flag.png" alt="canadian flag"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
