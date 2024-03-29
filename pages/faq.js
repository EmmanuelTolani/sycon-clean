import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/LayoutUI/Header";
import Banner from "../src/components/LayoutUI/Banner";
import MobileMenu from "../src/components/LayoutUI/MobileMenu";
import Footer from "../src/components/LayoutUI/Footer";
import Faq from "../src/components/HomePage/Faq";
export default function FaqPage() {
  return (
    <div>
      <Head>
        <title>SYCON Clean | FAW</title>
        <meta name="description" content="Frequently Asked Questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Banner /> */}
      <MobileMenu sticky={true} />
      <Header sticky={true} />
      <Faq type="full" />
      <Footer />
    </div>
  );
}
