import React from "react";

type Link = {
  id: number;
  title: string;
  link: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    title: "Xizmatlar",
    link: "/xizmatlar",
  },
  {
    id: 2,
    title: "Blog",
    link: "/blogs",
  },
  {
    id: 3,
    title: "Biz haqimizda",
    link: "/about",
  },
];

const Header = () => {
  return (
    <nav className="flex justify-between px-4 py-2 bg-green-400 text-[2rem] font-bold text-white">
      <h1>Logo</h1>
      <ul className="flex gap-2">
        {navLinks.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <ul className="flex gap-2">
        <li>Dark mode</li>
        <li>Language</li>
        <li>Sinab ko&apos;ring</li>
      </ul>
      <button className="hidden md:block bg-red-300 rounded-full px-4 py-2 hover:bg-blue-300">
        Button
      </button>
    </nav>
  );
};

export default Header;
