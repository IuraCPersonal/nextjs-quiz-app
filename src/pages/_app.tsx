import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "@/components/utils/scroll-observer";
import { AuthContextProvider } from "@/components/utils/auth-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </AuthContextProvider>
  );
}
