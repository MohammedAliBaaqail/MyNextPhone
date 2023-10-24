import type { Metadata } from "next";
import getDeviceListByBrand from "@/api/getDeviceListByBrand";

import { notFound } from "next/navigation";
import DeviceCard from "@/app/components/DeviceCard";

type Params = {
  params: {
    brandId: string;
  };
};
export async function generateMetadata({
  params: { brandId },
}: Params): Promise<Metadata> {
  const brandDevicesData: Promise<deviceListByBrand[]> =
    getDeviceListByBrand(brandId);
  const brandDevices = await brandDevicesData;

  if (!brandDevices) {
    return {
      title: "Brand Not Found",
    };
  }
  return {
    title: brandId,
    description: brandId,
  };
}

export default async function brandDevices({ params: { brandId } }: Params) {
  const brandDevicesData: Promise<deviceListByBrand[]> =
    getDeviceListByBrand(brandId);
  const brandDevices = await brandDevicesData;
  if (!brandDevices) return notFound();
  return (
    <div className=" flex flex-wrap justify-center custom_layout py-10 px-3 ">
      {brandDevices.map((device, index) => {
        let isEven = index % 2 === 0;
        return (
          <DeviceCard
            deviceId={device.id}
            name={device.name}
            img={device.img}
            isEven={isEven}
          />
        );
      })}
    </div>
  );
}
