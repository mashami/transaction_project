import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { GlobalProvider } from "../Context/GlobleState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
