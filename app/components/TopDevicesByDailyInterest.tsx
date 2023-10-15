import getTopDevices from "@/api/getTopDevices";

import DeviceCard from "./DeviceCard";

import { notFound } from "next/navigation";

export default async function TopDevicesByFans() {
  const topDevicesData: Promise<topDevices> = getTopDevices();
  const topDevices = await topDevicesData;
  // console.log(topDevices[1].list)
  if (!topDevices) return notFound();
  return (
    <div className="">
      {
        <h2 className="text-5xl   text-center mb-6">
          {topDevices[0].category}
        </h2>
      }
      <div className="flex flex-wrap flex-row justify-evenly">
        {topDevices[0].list.map((device) => {
          return (
            <DeviceCard
              key={device.id}
              deviceId={device.id}
              name={device.name}
              img={"/images/phone.jpg"}
            />
          );
        })}
      </div>
    </div>
  );
}
