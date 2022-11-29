/**
 * navbar.tsx
 * Ian Kollipara
 * 2022.10.18
 *
 * Navigation
 */

import Link from "next/link";

export const Navbar = () => (
  <nav className="navbar border-solid border-b-black border">
    <Link passHref href="/">
      <a className="btn btn-ghost normal-case text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-800 mr-auto">
        Native Nebraska
      </a>
    </Link>
    <section className="inline-flex">
      <Link passHref href="/lessons">
        <a className="btn btn-ghost normal-case text-xl">Lessons</a>
      </Link>
      <Link passHref href="/philosophies">
        <a className="btn btn-ghost normal-case text-xl">Philosophies</a>
      </Link>
    </section>
  </nav>
);
