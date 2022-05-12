This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, add script to pages/_app.js:

```bash
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="//cdn.evgnet.com/beacon/ingramconsumermktg/engage/scripts/evergage.min.js" />
      <Component {...pageProps} />
    </>
  );
```

work action handlers and any window invocation on a separate js file, and add it as an event listener,
dont forget to default export something.

```bash
function onClick() {
  window.SalesforceInteractions.sendEvent({
    interaction: {
        name: window.SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
        catalogObject: {
            type: "Category",
            id: () => window.location.search.split("=")[1],
            attributes: {
                url: () => window.location.href,
                name: () => window.location.search.split("=")[1],
            }
        }
    },
    user: { identities: { emailAddress: "ignacio.sanchez@devsutd.com" } }
  });
}

const button = document.getElementById("button");
button?.addEventListener('click', onClick);

export default function LogSalesforceActions () {
  return null
}
```
From your component import the action and wrap it on Next's dynamic function

```bash
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const Actions = dynamic(() => import("../window/Actions"), {
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/** Render actions as another component an if needed the button for calling the action */}
        <Actions />
        <button id="button"> send Salesforce interaction </button>
      </main>
    </div>
  );
};

export default Home;

```
