import DeviceCard from "./DeviceCard";
import { notFound } from "next/navigation";
import getDeviceDetails from "@/api/getDeviceDetails";

export default async function TopDevicesByFans(topDevices: topDevices) {
  if (!topDevices) return notFound();

  // Create an array of promises to fetch device details
  const deviceDetailPromises = topDevices[0].list.map((device) =>
    getDeviceDetails(device.id)
  );

  // Use Promise.all to fetch all device details concurrently
  const deviceDetails = await Promise.all(deviceDetailPromises);

  return (
    <div className="">
      <h2 className="text-5xl text-[#005bea] text-center mb-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-full max-md:ml-auto max-md:text-center max-md:mt-32">
        {topDevices[0].category}
      </h2>
      <div className="flex flex-wrap flex-row justify-evenly">
        {topDevices[0].list.map((device, index: number) => {
          let isEven = index % 2 === 0;
          const deviceDetail = deviceDetails[index];
          return (
            <DeviceCard
              key={device.id}
              deviceId={device.id}
              name={device.name}
              img={deviceDetail ? deviceDetail.img : "/images/phone.jpg"}
              isEven={isEven}
            />
          );
        })}
      </div>
    </div>
  );
}
