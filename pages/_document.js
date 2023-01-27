import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          media="screen"
          href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
        />
        <script
          src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_dialog_snippet.js"
          form_url="https://clienthub.getjobber.com/client_hubs/2f0de348-75ef-4583-bf91-f83911c3f4d6/public/work_request/embedded_dialog_work_request_form"
          clienthub_id="2f0de348-75ef-4583-bf91-f83911c3f4d6"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
