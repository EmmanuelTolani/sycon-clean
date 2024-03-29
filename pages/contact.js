import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/LayoutUI/Header";
import Banner from "../src/components/LayoutUI/Banner";
import MobileMenu from "../src/components/LayoutUI/MobileMenu";
import Footer from "../src/components/LayoutUI/Footer";
import SignupForm from "../src/components/Form/SignupForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>SYCON Clean | Contact</title>
        <meta name="description" content="Contact SYCON Cleaning Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Banner /> */}
      <MobileMenu sticky={true} />
      <Header sticky={true} />
      <div className="contact1">
        <div className="container">
          <SignupForm />
        </div>
        <div className="contact-bottom">
          <div className="contact-images">
            <img src="/img/gall-1.png"></img>
            <img src="/img/gall-2.png"></img>
            <img src="/img/gall-3.png"></img>
            <img src="/img/gall-4.png"></img>
          </div>
          <div className="contact-details">
            <h2>Talk To Us:</h2>
            <p>Call Us: (780)-238-7116</p>
            <span>
              Email Us:{" "}
              <Link href="mailto: info@syconcleaningservice.com">
                info@syconcleaningservice.com
              </Link>
            </span>
          </div>
          <div className="contact-images">
            <img src="/img/gall-5.png"></img>
            <img src="/img/gall-6.png"></img>
            <img src="/img/gall-1.png"></img>
            <img src="/img/gall-2.png"></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
