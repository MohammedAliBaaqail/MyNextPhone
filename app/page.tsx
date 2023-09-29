
import Image from "next/image"
import getAllBrands from "@/lib/getAllBrands"
import getDeviceListByBrand from "@/lib/getDeviceListByBrand"
import Link from "next/link"

export default async function Home() {

  

  const brandsData : Promise<brand[]> = getAllBrands()
  const brands = await brandsData

  const deviceListByBrandData : Promise<deviceListByBrand[]> = getDeviceListByBrand('apple-phones-48')
  const deviceListByBrand = await deviceListByBrandData

  console.log("hello")



  return (
    <main className="min-h-screen dark:bg-slate-950 dark:text-white ">
      GG
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
      )}
    </main>
  )
}
