"use client";


import searchForDevices from "@/api/searchForDevices";

import SearchDevices from "./SearchDevices";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const placeHolderData = [
  {
    id: "apple_ipad_mini_2-5735",
    name: "Apple iPad mini 2",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini2.jpg",
    description:
      "Apple iPad mini 2 tablet. Announced Oct 2013. Features 7.9″  display, Apple A7 chipset, 5 MP primary camera, 1.2 MP front camera, 6470 mAh battery, 128 GB storage, 1000 MB RAM, Oleophobic coating.",
  },
  {
    id: "apple_ipad_pro_10_5_(2017)-8716",
    name: "Apple iPad Pro 10.5 (2017)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-105-2017.jpg",
    description:
      "Apple iPad Pro 10.5 (2017) tablet. Announced Jun 2017. Features 10.5″  display, Apple A10X Fusion chipset, 12 MP primary camera, 7 MP front camera, 8134 mAh battery, 512 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_watch_se_(2022)-11865",
    name: "Apple Watch SE (2022)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-watch-8se-2022.jpg",
    description:
      "Apple Watch SE (2022) watch. Announced Sep 2022. Features 1.78″  display, Apple S8 chipset, 296 mAh battery, 32 GB storage, 1000 MB RAM, Ion-X strengthened glass.",
  },
  {
    id: "apple_ipad_pro_12_9_(2021)-10864",
    name: "Apple iPad Pro 12.9 (2021)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2021.jpg",
    description:
      "Apple iPad Pro 12.9 (2021) tablet. Announced Apr 2021. Features 12.9″  display, Apple M1 chipset, 10758 mAh battery, 2048 GB storage, 16 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_air_(2019)-9638",
    name: "Apple iPad Air (2019)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air3-2019.jpg",
    description:
      "Apple iPad Air (2019) tablet. Announced Mar 2019. Features 10.5″  display, Apple A12 Bionic chipset, 8134 mAh battery, 256 GB storage, 3 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_ipad_pro_11_(2018)-9386",
    name: "Apple iPad Pro 11 (2018)",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-11-2018.jpg",
    description:
      "Apple iPad Pro 11 (2018) tablet. Announced Oct 2018. Features 11.0″  display, Apple A12X Bionic chipset, 7812 mAh battery, 1024 GB storage, 4 GB RAM, Scratch-resistant glass.",
  },
  {
    id: "apple_iphone_5c-5690",
    name: "Apple iPhone 5c",
    img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5c-new2.jpg",
    description:
      "Apple iPhone 5c smartphone. Announced Sep 2013. Features 4.0″  display, Apple A6 chipset, 8 MP primary camera, 1.2 MP front camera, 1510 mAh battery, 32 GB storage, 1000 MB RAM.",
  },
];

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
    <div className="w-96 max-w-md mx-auto">
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
