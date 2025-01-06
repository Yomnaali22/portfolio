import "@/styles/globals.css";
import type { AppProps } from "next/app";
export const runtime = "experimental-edge";
import localFont from "next/font/local";
import Head from "next/head";

const firaCodeBold = localFont({
  src: "./../fonts/FiraCode-Bold.woff",
  variable: "--font-firaCodeBold",
});

const firaCodeRegular = localFont({
  src: "./../fonts/FiraCode-regular.woff",

  variable: "--firaCodeRegular",
});

const firaCodeSemiBold = localFont({
  src: "./../fonts/FiraCode-semiBold.woff",

  variable: "--firaCodeSemiBold",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${firaCodeBold.variable}${firaCodeSemiBold.variable}${firaCodeRegular.variable}`}
    >
      <Head>
        <title>Portfolio:Yomna Ali</title>
        <meta
          name="description"
          content="Yomna Ali is a Frontend Developer (React)"
        />
        <meta property="og:title" content="Portfolio:Yomna Ali" key="title" />
        <meta
          property="og:description"
          content="Yomna Ali is a Frontend Developer (React)"
        />
      </Head>
      <Component {...pageProps} />;
    </main>
  );
}
