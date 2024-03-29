import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/LayoutUI/Header";
import Banner from "../src/components/LayoutUI/Banner";
import MobileMenu from "../src/components/LayoutUI/MobileMenu";
import Footer from "../src/components/LayoutUI/Footer";
import Hero from "../src/components/AboutPage/Hero";
import About from "../src/components/AboutPage/About";
import Video from "../src/components/AboutPage/Video";
import Team from "../src/components/AboutPage/Team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SYCON Clean | About</title>
        <meta name="description" content="Learn more about SYCON clean." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Banner /> */}
      <MobileMenu sticky={true} />
      <Header sticky={true} />
      <Hero />
      <About />
      {/* <Video /> */}
      {/* <Team /> */}
      <Footer />
    </div>
  );
}
