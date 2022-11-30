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
import Link from "next/link";
import Head from "next/head";

const components: MDXComponents = {
  h1: ({ children }) => (
    <>
      <Head>
        <title>Native Nebraska - {children}</title>
      </Head>
      <h1 className="text-3xl sm:text-4xl lg:text-6xl mt-2 text-center">
        {children}
      </h1>
      <hr />
    </>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl sm:text-3xl lg:text-5xl">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl sm:text-2xl lg:text-4xl">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg sm:text-xl lg:text-3xl">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-md sm:text-lg lg:text-2xl">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-base font-bold sm:text-md sm:font-normal lg:text-xl">
      {children}
    </h6>
  ),
  p: ({ children }) => <p className="text-base">{children}</p>,
  blockquote: ({ children }) => (
    <blockquote className="bg-gray-200 p-1 italic rounded">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="list-inside list-disc ml-4">{children}</ul>
  ),
  li: ({ children }) => <li className="">{children}</li>,
  img: ({ src }) => (
    <img
      className="w-full mx-auto object-contain object-center h-64 sm:mb-4 lg:h-96"
      src={src}
      alt="An Image"
    />
  ),
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  a: ({ children, href }) => (
    <Link className="" href={href} passHref>
      <a className="text-green-600 visited:text-green-800 hover:text-green-700 active:text-green-800 hover:underline">
        {children}
      </a>
    </Link>
  ),
  wrapper: ({ components, ...rest }) => (
    <main className="w-full px-12 space-y-2 text-gray-900 lg:px-72" {...rest} />
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
