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
    <h1>brandDevices</h1>
  );
}
