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

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-8xl text-center text-white first:mt-5 bg-gray-600 mx-5 rounded-lg py-2">
      {children}
    </h1>
  ),
  h2: ({ children }) => <h2 className="text-5xl">{children}</h2>,
  h3: ({ children }) => <h3>{children}</h3>,
  h4: ({ children }) => <h4>{children}</h4>,
  h5: ({ children }) => <h5>{children}</h5>,
  h6: ({ children }) => <h6>{children}</h6>,
  p: ({ children }) => (
    <p className="text-xl leading-relaxed my-2">{children}</p>
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
      className="container-md mx-auto prose w-max mx-5 lg:prose-2xl pb-52"
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
