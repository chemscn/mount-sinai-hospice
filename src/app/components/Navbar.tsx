"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";

interface INavLinkElement {
  path: string;
  name: string;
}

const Navbar = () => {
  // ✅ start closed, not undefined
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: INavLinkElement[] = [
    { path: "/", name: "Home" },
    { path: "/about-us", name: "About Us" },
    { path: "/faqs", name: "What to Expect" },
    { path: "/contact-us", name: "Contact Us" },
  ];


  return (
    <header className="navbar bg-base-100 justify-between sticky top-0 px-5 border-b-[1px] z-10 pb-4">
      <Link href="/" aria-label="Go to homepage">
        <Image src="/logo.png" height={120} width={120} alt="Mount Sinai Hospice logo" priority />
      </Link>

      {/* Mobile */}
      <div className="navbar-end lg:flex lg:navbar-start">
        <div className="dropdown dropdown-end">
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={()=>setIsOpen((v)=> !v)}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {isOpen && (
            <ul
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              role="menu"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  path={link.path}
                  name={link.name}
                  closeMenu={()=> setIsOpen(false)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Desktop */}
      <nav className="navbar-end hidden lg:flex" aria-label="Primary navigation">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <NavLink key={link.path} path={link.path} name={link.name} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
