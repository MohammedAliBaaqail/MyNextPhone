
import Image from "next/image"
import getAllBrands from "@/lib/getAllBrands"
import getDeviceListByBrand from "@/lib/getDeviceListByBrand"
import getTopDevices from "@/lib/getTopDevices"
import TopDevices from "./components/topDevices"
import Link from "next/link"

export default async function Home() {

  

  // const brandsData : Promise<brand[]> = getAllBrands()
  // const brands = await brandsData

   

  // const deviceListByBrandData : Promise<deviceListByBrand[]> = getDeviceListByBrand('apple-phones-48')
  // const deviceListByBrand = await deviceListByBrandData

 



  return (
    <div className="min-h-screen">

      <TopDevices/>
    </div>
  )
}
