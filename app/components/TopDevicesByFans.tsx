import DeviceCard from "./DeviceCard";
import { notFound } from "next/navigation";
import getDeviceDetails from "@/api/getDeviceDetails";

export default async function TopDevicesByFans(topDevices: topDevices) {
  if (!topDevices) return notFound();

  const devicesImgPromises: Promise<string | undefined>[] =
    topDevices[1].list.map((device) =>
      getDeviceDetails(device.id).then((deviceDetails) => deviceDetails.img)
    );

  const devicesImg = await Promise.all(devicesImgPromises);

  return (
    <div className="">
      <h2 className="text-5xl text-[#005bea] text-center mb-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-full max-md:ml-auto max-md:text-center max-md:mt-6">
        {topDevices[1].category}
      </h2>
      <div className="flex flex-wrap flex-row justify-evenly">
        {topDevices[1].list.map((device, index: number) => {
          let isEven = index % 2 === 0;
          return (
            <DeviceCard
              key={device.id}
              deviceId={device.id}
              name={device.name}
              img={devicesImg[index]}
              isEven={isEven}
            />
          );
        })}
      </div>
    </div>
  );
}
