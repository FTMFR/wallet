import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/globals.css";
import localFont from "next/font/local";

const IRANSans = localFont({
  src: [
    {
      path: "../app/fonts/woff2/IRANSansXFaNum-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../app/fonts/woff/IRANSansXFaNum-Bold.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "../app/fonts/woff/IRANSansXFaNum-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/woff2/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} className={`${IRANSans.className}`} />
    </>
  );
};

export default MyApp;
