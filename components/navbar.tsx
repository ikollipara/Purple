/**
 * navbar.tsx
 * Ian Kollipara
 * 2022.10.18
 *
 * Navigation
 */

export const Navbar = () => (
  <nav className="navbar border-solid border-b-primary-focus border">
    <button className="btn btn-ghost normal-case text-xl text-purple-600 mr-auto">
      Purple
    </button>
    <a className="btn btn-ghost normal-case text-xl" href="/lessons">
      Lessons
    </a>
  </nav>
);
