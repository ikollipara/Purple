/**
 * navbar.tsx
 * Ian Kollipara
 * 2022.10.18
 *
 * Navigation
 */

export const Navbar = () => (
  <nav className="bg-slate-600 text-2xl text-white flex flex-row justify-between px-5">
    <h1 className="text-3xl my-2 text-purple-400 bg-slate-100 px-2 rounded-lg">
      Purple
    </h1>
    <a
      className="self-center bg-blue-500 px-2 my-2 hover:bg-blue-700"
      href="/lessons"
    >
      Lessons
    </a>
  </nav>
);
