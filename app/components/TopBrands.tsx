import Link from "next/link";
import BrandCard from "./BrandCard";

export default function TopBrands() {
  const topBrands = [
    {
      name: "Samsung",
      img: "/images/samsung.png",
      id: "samsung-phones-9",
    },
    {
      name: "Apple",
      img: "/images/apple.png",
      id: "apple-phones-48",
    },
    {
      name: "Google",
      img: "/images/google.png",
      id: "google-phones-107",
    },
    {
      name: "Xiaomi",
      img: "/images/xiaomi.png",
      id: "xiaomi-phones-80",
    },
    {
      name: "Huawei",
      img: "/images/huawei.png",
      id: "huawei-phones-58",
    },
    {
      name: "OnePlus",
      img: "/images/oneplus.png",
      id: "oneplus-phones-9",
    },
    {
      name: "Oppo",
      img: "/images/oppo.png",
      id: "oppo-phones-82",
    },
    {
      name: "Realme",
      img: "/images/realme.png",
      id: "realme-phones-118",
    },
    {
      name: "Vivo",
      img: "/images/vivo.png",
      id: "vivo-phones-98",
    },
    // {
    //     name: 'Nokia',
    //     img: '/images/nokia.png',
    //     id: 'nokia-phones-9'
    // }
  ];
  return (
    <>
    <div className="flex flex-row flex-wrap justify-center py-6  ">
      {topBrands.map((brand) => {
        return <BrandCard key={brand.id} id={brand.id}  name={brand.name} img={brand.img} />;
      })}
      
    </div>
    <div className="flex justify-center">
    <Link className="text-3xl  p-7 mx-auto  bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100  mb-8" href="/brands">All Brands</Link>
    </div>
    </>
  );
}
