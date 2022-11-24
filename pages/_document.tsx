/**
 * _document.tsx
 * Ian Kollipara
 * 2022.10.20
 *
 */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="emerald">
      <Head>
        <meta
          name="description"
          content="A collection of lesson plans for children in Seward Nebraska to get them outside and in nature."
        />
        <meta
          name="keywords"
          content="Nature, Nebraska, Concordia, Cune, Seward, Lesson, Outside"
        />
        <meta name="author" content="Rebecca Yox" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
