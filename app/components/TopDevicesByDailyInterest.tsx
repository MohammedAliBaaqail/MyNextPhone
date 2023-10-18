import getTopDevices from "@/api/getTopDevices";

import DeviceCard from "./DeviceCard";

import { notFound } from "next/navigation";

export default async function TopDevicesByFans(topDevices:topDevices ) {


  if (!topDevices) return notFound();
  return (
    <div className="">
      {
        <h2 className="text-5xl text-[#005bea]   text-center mb-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-full max-md:ml-auto max-md:text-center max-md:mt-32">
          {topDevices[0].category}
        </h2>
      }
      <div className="flex flex-wrap flex-row justify-evenly">
        {topDevices[0].list.map((device, index: number) => {
          let isEven = index % 2 === 0;
          return (
            
            <DeviceCard
              key={device.id}
              deviceId={device.id}
              name={device.name}
              img={"/images/phone.jpg"}
              isEven={isEven}
                          />
                         
          );
        })}
      </div>
    </div>
  );
}
