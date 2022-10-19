/**
 * index.tsx
 * Ian Kollipara
 * 2022.10.18
 *
 * Lessons Hub
 */

import fs from "fs/promises";
import { GetStaticProps, InferGetStaticPropsType } from "next";
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
    <h1 className="text-7xl text-center mb-2">Lessons</h1>
    <p className="mx-auto text-3xl font-light max-w-screen-lg shadow-md p-5 mb-12 shadow-slate-200">
      This is a collection of Lessons for my Luke Scholar Capstone. Each lesson
      is designed to get students outside and experiencing nature.
    </p>
    <div className="text-center flex flex-col text-3xl">
      {props.files.map((file) => (
        <Link href={`/lessons/${file}`} passHref>
          <a className="mb-4 text-blue-400 hover:text-blue-600">{file}</a>
        </Link>
      ))}
    </div>
  </>
);

export default Lessons;
