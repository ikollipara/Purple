/**
 * navbar.tsx
 * Ian Kollipara
 * 2022.10.18
 *
 * Navigation
 */

import Link from "next/link";

export const Navbar = () => (
  <nav className="flex px-2 bg-gray-900 py-3">
    <Link passHref href="/">
      <a className="normal-case text-lg lg:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-800 mr-auto">
        Native Nebraska
      </a>
    </Link>
    <section className="space-x-4 self-center">
      <Link passHref href="/lessons">
        <a className="normal-case text-base lg:text-xl text-gray-100 hover:bg-green-600 p-2 rounded active:bg-green-800">
          Lessons
        </a>
      </Link>
      <Link passHref href="/philosophies">
        <a className="normal-case text-base lg:text-xl text-gray-100 hover:bg-green-600 p-2 rounded active:bg-green-800">
          Philosophies
        </a>
      </Link>
    </section>
  </nav>
);
