import "../styles/globals.css";
import type { AppProps } from "next/app";
export const runtime = "experimental-edge";
import localFont from "next/font/local";
import Head from "next/head";
import Cursor from "../components/Cursor";

const firaCodeBold = localFont({
  src: "./../fonts/FiraCode-Bold.woff",
  variable: "--font-firaCodeBold",
});

const firaCodeRegular = localFont({
  src: "./../fonts/FiraCode-Regular.woff",

  variable: "--firaCodeRegular",
});

const firaCodeSemiBold = localFont({
  src: "./../fonts/FiraCode-SemiBold.woff",
  variable: "--firaCodeSemiBold",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${firaCodeBold.variable}${firaCodeSemiBold.variable}${firaCodeRegular.variable}`}
    >
      <Head>
        <link rel="canonical" href="https://yomnaali22.github.io/portfolio/" />
        <title>Yomna Ali | Web3 & Fullstack Developer Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Yomna Ali is A web3 enthusiast and a Full-stack Developer specializing in Frontend Development."
        />
        <meta
          name="title"
          content="Yomna Ali | Web3 & Fullstack Developer Portfolio - 65 chars"
        />
        <meta
          property="og:title"
          content="My Dev Portfolio:Yomna Ali"
          key="title"
        />
        <meta
          property="og:description"
          content="Yomna Ali is A web3 enthusiast and a Full-stack Developer specializing in Frontend Development."
        />
      </Head>
      {/* <Cursor /> */}
      <Component {...pageProps} />
    </main>
  );
}
