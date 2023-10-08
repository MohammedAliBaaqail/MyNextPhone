
import Image from "next/image"
import getAllBrands from "@/api/getAllBrands"
import getDeviceListByBrand from "@/api/getDeviceListByBrand"
import getTopDevices from "@/api/getTopDevices"
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
