
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
    <main className="min-h-screen  ">
      {/* GG
      <hr className="opacity-60 sm:max-w-lg " />
      {deviceListByBrand.map(brand => {
        return (
          <>
          <h3 key ={brand.id}>{brand.name}</h3>
          <Image src={brand.img} alt = {brand.name} width={100} height={100}/>
          <h5>{brand.description}</h5>
          </>
        )
      }
      )} */}

      <TopDevices/>
    </main>
  )
}
