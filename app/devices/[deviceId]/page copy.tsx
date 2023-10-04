import getDeviceDetails from "@/lib/getDeviceDetails";
import type { Metadata } from "next";
import Image from "next/image";
import placeHolderData from "./data.json"

import { notFound } from "next/navigation";

type Params = {
  params: {
    deviceId: string;
  };
};
export async function generateMetadata({
  params: { deviceId },
}: Params): Promise<Metadata> {
  const deviceDetailsData: Promise<deviceDetails> = getDeviceDetails(deviceId);
  const deviceDetails = await deviceDetailsData;
  if (!deviceDetails) {
    return {
      title: "Device Not Found",
    };
  }
  return {
    title: deviceDetails.name,
    description: deviceDetails.name,
  };
}

export default async function deviceDetails({ params: { deviceId } }: Params) {
  const deviceDetailsData: Promise<deviceDetails> = getDeviceDetails(deviceId);
  const deviceDetails = await deviceDetailsData;
  // console.log(deviceDetails.detailSpec[1])
  if (!deviceDetails) return notFound();
  // console.log(deviceDetails)


  // const fs = require("fs");
  // const saveData = (data: any) => {
  //   const finished = (error: unknown) => {
  //     if (error) console.log("brblm");
  //     return;
  //   };
  //   const saveData = JSON.stringify(data);
  //   fs.writeFile("data.json", saveData, finished);
  // }
  // saveData(deviceDetails)

  
  return (
    <div>
      <h1 className="text-4xl my-4">{deviceDetails.name}</h1>
      <div>
        <Image
          className="my-4"
          src={deviceDetails.img}
          alt={deviceDetails.name}
          width={160}
          height={212}
        />
        {deviceDetails.quickSpec.map((spec, index) => {
          return (
            <div key={index}>
              {spec.name}
              {spec.value}
            </div>
          );
        })}
      </div>

      {deviceDetails.detailSpec.map((spec, index) => {
        return (
          <div key={index}>
            <h2 className="text-3xl text-sky-500">{spec.category}</h2>

            {spec.specifications.map((subSpec, index) => {
              return (
                <div key={index}>
                  <h2>
                    {" "}
                    {subSpec.name} : {subSpec.value}
                  </h2>
                </div>
              );
            })}

            <hr />
          </div>
        );
      })}
    </div>
  );
}
