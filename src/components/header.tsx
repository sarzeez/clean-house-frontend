import React, { useState } from 'react'
import Logo from '../assets/imgs/logo.png'
import Image from 'next/image';
import { FaBars, FaTimes } from "react-icons/fa"

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

  
  const [color, setColor] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const changeColor = () => {
    if (window.screenY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <nav className=" container flex items-center justify-between py-2 text-[18px] font-bold text-black">
      <div className="flex items-center gap-3">
        <Image src={Logo.src} width={44} height={44} alt="logo" />
        <h1 className="text-[2rem] whitespace-nowrap text-primary">Toza Makon</h1>
      </div>
      <ul className=" block w-full md:flex flex-col md:flex-row items-center justify-center 0 transition-[0.35s] lg:flex-row gap-5">
        {navLinks.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {/* <ul className="flex gap-4"> */}
        {/* <li className="text-[1.3rem] whitespace-nowrap text-primary">Dark mode</li> */}
        {/* <select className="">
          <option value="#">uz</option>
          <option value="#">en</option>
        </select> */}
      {/* </ul> */}
      <button className="button hidden lg:block">
        Ilovamizni sinab ko&apos;ring
      </button>

      <div className=" lg:hidden" onClick={handleClick}>
        {show ? (<FaTimes size={20} style={{ color: "#0FC36D" }} />
        ) : (
          <FaBars size={20} style={{ color: "#0FC36D" }} />
        )}

      </div>
    </nav>
  );
};

export default Header;
