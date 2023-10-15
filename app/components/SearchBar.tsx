"use client";


import searchForDevices from "@/api/searchForDevices";

import SearchDevices from "./SearchDevices";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



export default function SearchBar() {
  const router = useRouter();
  const [searchQuery, setQuery] = useState("");

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search/" + searchQuery);
  };
  return (
    <div className="w-96 max-w-md ">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden shadow-lg">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <form className="searchbar__form" onSubmit={handleSubmit}>
          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search For A Phone..."
            value={searchQuery}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

// <div className='searchbar mx-auto' >
//   <div className='searchbar__item'>

//     {/* <SearchDevices   /> */}
//     {/* <SearchButton otherClasses='sm:hidden' /> */}

//     <form className='searchbar__form' onSubmit={handleSubmit}>
//     <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setQuery(e.target.value)} />
//     </form>

//   </div>

// </div>
