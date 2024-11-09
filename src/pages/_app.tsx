import "@/styles/globals.css";
import "@/fonts/firacode.css";
import type { AppProps } from "next/app";
export const runtime = "experimental-edge";
import { ThemeProvider } from "@/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
