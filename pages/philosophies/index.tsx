/**
 * philosophies/index.tsx
 */

import fs from "fs/promises";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const getStaticProps: GetStaticProps = async (context) => {
  const files = await fs
    .readdir("./pages/philosophies")
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

const Philosophies = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => (
  <>
    <Head>
      <title>Native Nebraska - Lessons</title>
    </Head>
    <h1 className="text-7xl text-center my-2">Lessons</h1>
    <p className="mx-auto text-3xl font-light max-w-screen-lg mb-12">
      Each Lesson is designed to get students outside.
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
                <a className="mb-4 text-blue-400 hover:text-blue-600">
                  {toTitleCase(file.replaceAll("-", " "))}
                </a>
              </Link>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Philosophies;
