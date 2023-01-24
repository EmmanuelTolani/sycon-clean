import React from "react";
import Link from "next/link";
import BookBtn from "../LayoutUI/BookBtn";
import Script from "next/script";
const Info2 = () => {
  return (
    <>
      {/* <Script
        strategy="beforeInteractive"
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
        form_url="https://clienthub.getjobber.com/client_hubs/2f0de348-75ef-4583-bf91-f83911c3f4d6/public/work_request/embedded_dialog_work_request_form"
        clienthub_id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
      /> */}
      <div className="info2">
        <div className="container">
          <div className="info2__left">
            <img
              src="../img/cleaning-women.png"
              alt="woman cleaning window"
            ></img>
            <div className="info__rating-tag">
              <img
                src="../img/icons/ratings-tag.png"
                alt="sycon customer ratings"
              ></img>
            </div>
            <div className="info__tag">
              <img
                src="../img/icons/tag.png"
                alt="c
            sycon customer review"
              ></img>
            </div>
          </div>
          <div className="info2__right">
            <h1>We are the best In the cleaning business.</h1>
            <p>
              Looking for the best cleaning service in town? Look no further! We
              are the top choice for professional cleaning services, and
              here&apos;s why:
            </p>
            <ol>
              <li>
                Our team is highly trained and experienced, ensuring that we
                deliver the highest quality clean every time.
              </li>
              <li>
                We use only the best products and techniques to effectively
                clean and disinfect your space.
              </li>
              <li>
                We are thorough and detail-oriented, leaving no corner or
                surface untouched.
              </li>
              <li>
                We are flexible and accommodating, fitting our services to your
                specific needs and schedule. We are reliable and dependable,
                always showing up on time and ready to work.
              </li>
              <li>
                We offer competitive pricing, so you can afford to keep your
                space looking its best.
              </li>
            </ol>
            <p>
              {" "}
              Don&apos;t settle for mediocre cleaning services. Choose the best
              and choose us. Contact us today to schedule your first cleaning!
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

export default Info2;
