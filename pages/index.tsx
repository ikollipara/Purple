/**
 * index.tsx
 * Ian Kollipara
 * 2022.11.21
 *
 * Homepage
 */

import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Native Nebraska</title>
      </Head>
      <div
        className="hero min-h-[95vh]"
        style={{
          backgroundImage: `url("/PastedGraphic-1-1.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-screen">
            <h1 className="text-8xl font-bold bg-clip-text bg-gradient-to-r from-green-400 to-green-800 text-transparent my-4">
              Native Nebraska
            </h1>
            <h2 className="text-2xl font-light mb-3">
              Native Nebraska is an outdoor educational resource for kids grades
              K-5th that focuses on teaching environmental concepts in an
              attempt to foster a wonder in God’s creation and to teach
              stewardship of His Earth. It can be used in formal education
              settings or less formal settings such as a family outing.
            </h2>
            <h2 className="text-2xl text-center font-light my-4">
              This project's design results from intentional reflection of the
              following:
            </h2>
            <ul className="text-center space-y-4 text-xl">
              <li className="mt-2">
                Childhood and the impact of <strong>outdoor</strong>{" "}
                environmental education
              </li>
              <li>
                An understanding of Biology, Ecology and Environmental Science
                from Concordia University Nebraska
              </li>
              <li>
                An appreciation for Beauty, Thinking and Truth - Luke Scholars
                Honors Program
              </li>
            </ul>
            <Link href="/lessons" passHref>
              <a className="mt-5 btn btn-primary">Get Started</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
