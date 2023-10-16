"use client"

import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";


export default function navBar() {
  return (
<nav
  className=" absolute nav_bg top-0 px-6   w-full flex flex-col justify-between md:flex-row items-center   py-2 text-neutral-500    lg:py-4">
    <Link className="text-xl text-neutral-800 " href="/">
      <img
        src="/images/logo.png"
        alt="logo"
        width={320}
        height={280}
      />
        </Link>
        <SearchBar/>
        {/* <Link
            className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 text-xl font-medium "
            
            href="/brands"
            data-te-nav-link-ref
            
            >Brands</Link> */}
            

  
</nav>
  );
}
