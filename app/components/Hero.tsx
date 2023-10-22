"use client"

import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className='w-full h-[90vh] hero_bg  flex justify-start max-md:flex-col'>
      <div className=" w-1/2   ml-24   text-8xl max-md:text-6xl  self-center  max-md:mt-auto max-md:w-full max-md:ml-0    ">
        <h1 className=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-full max-md:ml-auto max-md:text-center max-md:mt-32">
        Discover Your <br/> <span className="text-white ">Next</span> Phone
        </h1></div>
      <div className="  w-2/5  self-end  max-md:self-center max-md:mt-auto  max-md:w-3/4 "><img src="/images/hero_1.png" alt=""/></div>

    </section>
  )
}

