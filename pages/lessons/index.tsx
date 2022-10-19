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

const Lessons = () => (
  <>
    <h1>Lessons</h1>
    <div className="text-center">
      <Link className="no-underline" href="/lessons/Moth">
        Moth
      </Link>
    </div>
  </>
);

export default Lessons;
