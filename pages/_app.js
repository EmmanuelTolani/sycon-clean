import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
        form_url="https://clienthub.getjobber.com/client_hubs/2f0de348-75ef-4583-bf91-f83911c3f4d6/public/work_request/embedded_dialog_work_request_form"
        clienthub_id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
