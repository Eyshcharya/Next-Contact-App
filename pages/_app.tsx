import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout2 from "@/components/layouts/layout2";

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Layout2>
        <Component {...pageProps} />
      </Layout2>
    </>
  );
}

// PER-PAGE LAYOUT
// export default function App({ Component, pageProps }: AppPropsWithLayout1) {
//   const getLayout = Component.getLayout ?? ((page) => page);
//   return getLayout(<Component {...pageProps} />);
// }
