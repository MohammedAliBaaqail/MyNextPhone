
import getAllBrands from "@/api/getAllBrands";
import getDeviceListByBrand from "@/api/getDeviceListByBrand";
import getTopDevices from "@/api/getTopDevices";
import TopDevices from "./components/TopDevices";
import Link from "next/link";
import Hero from "./components/Hero";

export default async function Home() {
  // const brandsData : Promise<brand[]> = getAllBrands()
  // const brands = await brandsData

  // const deviceListByBrandData : Promise<deviceListByBrand[]> = getDeviceListByBrand('apple-phones-48')
  // const deviceListByBrand = await deviceListByBrandData

  return (
    <>
      <Hero />
      <div className="min-h-screen max-w-5xl custom_layout py-8">
        <TopDevices />
      </div>
    </>
  );
}
