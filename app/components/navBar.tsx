"use client"

import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";


export default function navBar() {
  return (
<nav
  className="absolute top-0 px-6  flex w-full flex-nowrap items-center   py-2 text-neutral-500    lg:py-4"
  data-te-navbar-ref>
    <Link className="text-xl text-neutral-800 " href="/">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={280}
        height={280}
      />
        </Link>
        <SearchBar/>
        <Link
            className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 text-xl font-medium "
            
            href="/brands"
            data-te-nav-link-ref
            
            >Brands</Link>
            

  
</nav>
  );
}
