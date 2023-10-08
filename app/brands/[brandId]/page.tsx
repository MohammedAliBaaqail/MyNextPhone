import type { Metadata } from "next";
import getDeviceListByBrand from "@/api/getDeviceListByBrand";

import { notFound } from "next/navigation";

type Params = {
  params: {
    brandId: string;
  };
};
export async function generateMetadata({
  params: { brandId },
}: Params): Promise<Metadata> {
    const brandDevicesData: Promise<deviceListByBrand[]> = getDeviceListByBrand(brandId);
    const brandDevices = await brandDevicesData;
    
    if (!brandDevices){
      return {
        title: "Brand Not Found"
      }
    }
  return {
    title: brandId,
    description: brandId
  };
}

export default async function brandDevices({ params: { brandId } }: Params) {
    const brandDevicesData: Promise<deviceListByBrand[]> = getDeviceListByBrand(brandId);
    const brandDevices = await brandDevicesData;
    if (!brandDevices) return notFound()
  return(
   <div>
    {brandDevices.map((device)=>{
      return(
        <div>
        <h2>{device.name}</h2>
        {/* <h2>{device.description}</h2> */}
        

        </div>)
    })}
  </div>
  )
}
