"use client"

import Link from "next/link";
import React from "react";
import Search from "./search";

export default function navBar() {
  return (
<nav
  className="relative flex w-full flex-nowrap items-center justify-between bg-sky-500 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700  lg:flex-wrap lg:justify-start lg:py-4"
  data-te-navbar-ref>
    <Link className="text-xl text-neutral-800 " href="/"
        >Navbar</Link>
        <Link
            className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 "
            aria-current="page"
            href="/brands"
            data-te-nav-link-ref
            >Brands</Link>
     <Link
            className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none  lg:px-2 [&.active]:text-black/90 "
            href="#"
            data-te-nav-link-ref
            >Link</Link>
  <Search/>
</nav>
  );
}
