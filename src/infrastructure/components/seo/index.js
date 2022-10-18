import Head from "next/head";

/* eslint-disable react/prop-types */
export default function Seo({ title }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title} / Kodizim QR Order</title>
      <meta name="description" content="Kodizim" />
      <meta name="yandex-verification" content="6adff61af2926794" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="https://twitter.com/kodizimcom" />
      <meta
        name="twitter:description"
        content="https://twitter.com/kodizimcom"
      />
      <meta name="twitter:site" content="https://kodizim.com" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Kodizim QR Order" />
      <meta property="og:description" content="Kodizim Qr Order System" />
      <meta property="og:url" content="www.kodizim.com" />

      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#1d252d" />
    </Head>
  );
}
