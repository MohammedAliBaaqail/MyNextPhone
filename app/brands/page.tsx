import getAllBrands from "@/api/getAllBrands";
import Link from "next/link";
import BrandCard from "../components/BrandCard";

export default async function brands() {
  const brandsData: Promise<brand[]> = getAllBrands();
  const brands = await brandsData;


  return (
    <div className=" flex flex-wrap justify-center custom_layout py-10 px-3 ">
      {brands.map((brand) => (
        <BrandCard key={brand.id} {...brand}/>
      ))}
    </div>
  );
}
