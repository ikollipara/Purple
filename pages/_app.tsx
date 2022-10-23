/**
 * _app.tsx
 * Ian Kollipara
 * 2022.10.18
 *
 * App File
 */

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import type { MDXComponents } from "mdx/types";
import { Navbar } from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const components: MDXComponents = {
  h1: ({ children }) => (
    <>
      <Head>
        <title>Purple - {children}</title>
      </Head>
      <h1 className="first:mt-12 ml-3">{children}</h1>
      <hr />
    </>
  ),
  h2: ({ children }) => <h2 className="mx-3">{children}</h2>,
  h3: ({ children }) => <h3 className="mx-3">{children}</h3>,
  h4: ({ children }) => <h4 className="mx-3">{children}</h4>,
  h5: ({ children }) => <h5 className="mx-3">{children}</h5>,
  h6: ({ children }) => <h6 className="mx-3">{children}</h6>,
  p: ({ children }) => (
    <p className="text-xl leading-relaxed my-2 mx-3">{children}</p>
  ),
  strong: ({ children }) => <strong className="text-xl">{children}</strong>,
  // @ts-ignore
  img: Image,
  a: ({ children, href }) => (
    <Link
      className="text-blue-500 hover:text-blue-700 visited:text-purple-800"
      href={href}
    >
      {children}
    </Link>
  ),
  wrapper: ({ components, ...rest }) => (
    <main
      className="lg:mx-auto prose prose-sm lg:prose-2xl pb-52 w-full"
      {...rest}
    />
  ),
};

export default function ({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Navbar />
      <Component {...pageProps} />
    </MDXProvider>
  );
}
