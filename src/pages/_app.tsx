import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "@/components/utils/scroll-observer";
import { AuthContextProvider } from "@/components/utils/auth-context";
import PlaySound from "@/components/utils/play-sound";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlaySound />
      <AuthContextProvider>
        <ScrollObserver>
          <Component {...pageProps} />
        </ScrollObserver>
      </AuthContextProvider>
    </>
  );
}
