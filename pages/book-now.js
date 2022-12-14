import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/LayoutUI/Header.jsx";
import MobileMenu from "../src/components/LayoutUI/MobileMenu.jsx";
import Footer from "../src/components/LayoutUI/Footer.jsx";
import BookOnline from "../src/components/BookNow/BookOnline.jsx";
export default function BookNow() {
  return (
    <div>
      <Head>
        <title>SYCON Clean | Book Now</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header sticky={true} />
      <MobileMenu sticky={true} />
      <BookOnline />
      <Footer />
    </div>
  );
}
