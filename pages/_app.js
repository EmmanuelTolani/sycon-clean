import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Experience a sparkling clean home with our professional cleaning services. Our dedicated team uses eco-friendly products to ensure a safe and thorough clean. Book now for a stress-free and sparkling home."
        />
        <meta
          name="keywords"
          content="Edmonton cleaning company, professional cleaning in Edmonton, eco-friendly cleaning in Edmonton, safe and thorough cleaning in Edmonton, sparkling clean home in Edmonton, stress-free cleaning in Edmonton, home cleaning in Edmonton, dedicated team in Edmonton, affordable prices in Edmonton, reliable cleaning service in Edmonton, satisfaction guarantee in Edmonton, book now in Edmonton, healthy living environment in Edmonton."
        />
        <meta name="author" content="Sycon Cleaning Service" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon_io/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
