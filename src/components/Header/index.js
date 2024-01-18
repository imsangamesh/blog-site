"use client";

import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";
import { useState } from "react";
import useThemeSwitch from "../Hooks/useThemeSwitch";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import Logo from "./Logo";

const Header = () => {
  const [mode, toggleMode] = useThemeSwitch();
  const [click, setclick] = useState(false);

  const iconLinkCN = "inline-block w-6 h-6";
  const iconCN = "hover:scale-125 transition-all ease";

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      {/* ------------------------- LOGO */}
      <Logo />

      {/* ------------------------- HAMBURGER MENU */}
      <button
        className="sm:hidden z-50 mr-4"
        onClick={() => setclick((prev) => !prev)}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}>
              &nbsp;
            </span>

            <span
              className="absolute top-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{ opacity: click ? 0 : 1 }}>
              &nbsp;
            </span>

            <span
              className="absolute top-0 w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}>
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      {/* ------------------ MOBILE PAGE LINKS */}
      <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center gap-3 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-[3px] z-50 sm:hidden flex transition-all ease duration-300"
        style={{ top: click ? "1rem" : "-5rem" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={toggleMode}>
          {mode === "dark" ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>

      {/* ------------------ PC PAGE LINKS */}
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center gap-3 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-[3px] z-50 hidden sm:flex">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={toggleMode}>
          {mode === "dark" ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>

      {/* ------------------------- SOCIAL LINKS */}
      <div className="hidden sm:flex items-center gap-4">
        <a href={siteMetadata.linkedin} className={iconLinkCN}>
          <LinkedinIcon className={iconCN} />
        </a>
        <a href={siteMetadata.twitter} className={iconLinkCN}>
          <TwitterIcon className={iconCN} />
        </a>
        <a href={siteMetadata.github} className={iconLinkCN}>
          <GithubIcon className={`${iconCN} dark:fill-light`} />
        </a>
        <a href={siteMetadata.dribbble} className={iconLinkCN}>
          <DribbbleIcon className={iconCN} />
        </a>
      </div>
    </header>
  );
};

export default Header;
