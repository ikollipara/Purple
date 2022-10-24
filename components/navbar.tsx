/**
 * navbar.tsx
 * Ian Kollipara
 * 2022.10.18
 *
 * Navigation
 */

import Link from "next/link";

export const Navbar = () => (
  <nav className="navbar border-solid border-b-primary-focus border">
    <button className="btn btn-ghost normal-case text-xl text-purple-600 mr-auto">
      Purple
    </button>
    <section className="inline-flex">
      <Link passHref href="/lessons">
        <a className="btn btn-ghost normal-case text-xl">Lessons</a>
      </Link>
      <Link passHref href="/philosophy">
        <a className="btn btn-ghost normal-case text-xl">Philosophy</a>
      </Link>
    </section>
  </nav>
);
