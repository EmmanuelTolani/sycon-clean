import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/LayoutUI/Header";
import Banner from "../src/components/LayoutUI/Banner";
import MobileMenu from "../src/components/LayoutUI/MobileMenu";
import Footer from "../src/components/LayoutUI/Footer";
import Hero from "../src/components/HomePage/Hero";
import Offer from "../src/components/HomePage/Offer";
import Info from "../src/components/HomePage/Info";
import Info2 from "../src/components/HomePage/Info2";
import Faq from "../src/components/HomePage/Faq";
import GalleryMenu from "../src/components/HomePage/GalleryMenu";
import Testimonials from "../src/components/HomePage/Testimonials";
import Contact from "../src/components/HomePage/Contact";
import Script from "next/script";
export default function Home() {
  return (
    <div>
      <Head>
        <title>SYCON Clean | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Experience a sparkling clean home with our professional cleaning services. Our dedicated team uses eco-friendly products to ensure a safe and thorough clean. Book now for a stress-free and sparkling home."
        />
      </Head>
      <script
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
        form_url="https://clienthub.getjobber.com/client_hubs/2f0de348-75ef-4583-bf91-f83911c3f4d6/public/work_request/embedded_dialog_work_request_form"
        clienthub_id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
        async
      />
      {/* <Banner /> */}
      <MobileMenu sticky={true} />
      <Header />
      <Hero />
      <Offer />
      <Info />
      <Info2 />
      <Faq />
      <GalleryMenu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
