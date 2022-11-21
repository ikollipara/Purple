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
import Image from "next/image";
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
    <h1 className="text-7xl text-center my-2">Lessons</h1>
    <p className="mx-auto text-3xl font-light max-w-screen-lg mb-12">
      This is a collection of Lessons for my Luke Scholar Capstone. Each lesson
      is designed to get students outside and experiencing nature.
    </p>
    <table className="table w-1/2 mx-auto">
      <thead>
        <tr>
          <th>Lessons</th>
        </tr>
      </thead>
      <tbody>
        {props.files.map((file) => (
          <tr key={file}>
            <th>
              <Link href={`/lessons/${file}`} passHref>
                <a className="mb-4 text-blue-400 hover:text-blue-600">{file}</a>
              </Link>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Lessons;
