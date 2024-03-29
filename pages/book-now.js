import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/LayoutUI/Header.jsx";
import MobileMenu from "../src/components/LayoutUI/MobileMenu.jsx";
import Footer from "../src/components/LayoutUI/Footer.jsx";
import BookOnline from "../src/components/BookNow/BookOnline.jsx";
import Script from "next/script.js";
export default function BookNow() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <Head>
        <title>SYCON Clean | Book Now</title>
        <meta
          name="description"
          content="Book Now, Edmonton's most reliable cleaning services."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          media="screen"
          href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
        />
        <script
          src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
          clienthub_id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
          form_url="https://clienthub.getjobber.com/client_hubs/2f0de348-75ef-4583-bf91-f83911c3f4d6/public/work_request/embedded_work_request_form"
          async
        />
      </Head>
      <Header sticky={true} />
      <MobileMenu sticky={true} />
      <div className="container">
        <div
          id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
          style={{ height: "600px" }}
        ></div>
      </div>
      <Footer />
    </div>
  );
}
