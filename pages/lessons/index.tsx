/**
 * index.tsx
 * Ian Kollipara
 * 2022.10.18
 *
 * Lessons Hub
 */

import fs from "fs/promises";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async (context) => {
  const files = await fs
    .readdir("./pages/lessons")
    .then((files) =>
      files
        .filter((file) => file.endsWith("md"))
        .map((file) => file.split(".")[0])
    );

  return {
    props: {
      files: files,
    },
  };
};

const Lessons = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Native Nebraska - Lessons</title>
    </Head>
    <h1 className="text-5xl lg:text-7xl text-center my-2">Lessons</h1>
    <p className="mx-auto text-center text-xl lg:text-3xl font-light max-w-screen-lg mb-12">
      Each Lesson is designed to get students outside.
    </p>
    <ul className="w-full">
      {props.files.map((f) => (
        <li key={f}>
          <Link href={`/lessons/${f}`} passHref>
            <a className="text-gray-900 text-xl">
              <div className=" border-b border-solid border-gray-900 mx-12 hover:text-gray-100 hover:bg-green-600 py-2 group active:bg-green-700">
                <div className="flex">
                  <span className="ml-2 mr-auto">{f}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right self-center hidden group-hover:block mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Lessons;
