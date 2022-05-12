import "../styles/globals.css";
import Script from "next/script";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

declare global {
  interface Window {
    SalesforceInteractions: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [actions, setActions] = useState(undefined);
  useEffect(() => {
    if (typeof window !== "undefined") {
      return;
    }
  }, [actions]);

  return (
    <>
      <Script src="//cdn.evgnet.com/beacon/ingramconsumermktg/engage/scripts/evergage.min.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
