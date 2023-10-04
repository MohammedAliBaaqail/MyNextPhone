import getDeviceDetails from "@/lib/getDeviceDetails";
import type { Metadata } from "next";
import Image from "next/image";
import placeHolderData from "./data.json";

import { notFound } from "next/navigation";

type Params = {
  params: {
    deviceId: string;
  };
};
export async function generateMetadata({
  params: { deviceId },
}: Params): Promise<Metadata> {
  // const deviceDetailsData: Promise<deviceDetails> = getDeviceDetails(deviceId);
  // const deviceDetails = await deviceDetailsData;

  const deviceDetails = placeHolderData;
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
  // const deviceDetailsData: Promise<deviceDetails> = getDeviceDetails(deviceId);
  // const deviceDetails = await deviceDetailsData;
  const deviceDetails = placeHolderData;
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

  let screenInfo: { name: string; value: string }[] = [];
  let cameraInfo: { name: string; value: string }[] = [];
  let chipsetInfo: { name: string; value: string }[] = [];
  let batteryInfo: { name: string; value: string }[] = [];
  deviceDetails.quickSpec.map((spec, index) => {
    if (index < 2) {
      screenInfo.push();
      screenInfo.push(spec);
    }
    if (2 <= index && index < 4) {
      cameraInfo.push(spec);
    }
    if (4 <= index && index < 6) {
      chipsetInfo.push(spec);
    }
    if (6 <= index && index < 9) {
      batteryInfo.push(spec);
    }
  });

  console.log("screenInfo", screenInfo);
  console.log("cameraInfo", cameraInfo);
  console.log("chipsetInfo", chipsetInfo);
  console.log("batteryInfo", batteryInfo);
  return (
    <div>
      <h1 className="text-4xl py-4">{deviceDetails.name}</h1>
      <section className="flex flex-row mt-4 mb-8 max-md:flex-wrap">
        <div>
          <Image
            className="m-4"
            src={deviceDetails.img}
            alt={deviceDetails.name}
            width={160}
            height={212}
          />
        </div>
        <div className="flex flex-grow  m-4">
          {/* {deviceDetails.quickSpec.map((spec, index) => {
            return (
              <div className="min-h-max" key={index}>
                {screenInfo.push(spec)}
                {spec.name + " : "}
                {spec.value}
              </div>
            );
          })} */}

          <div className="flex flex-grow flex-col ">
            <div className="w-full h-1/2">Announced {deviceDetails.detailSpec[1].specifications[0].value}</div>
            <div className="w-full h-1/2">{deviceDetails.detailSpec[1].specifications[1].value}</div>
            <div className="w-full h-1/2 flex">
              
            <div className="w-1/4 ">
              <Image className="mb-2"
                src="/deviceInfoIcons/screen.png"
                width={50}
                height={50}
                alt="img"
              />
              {screenInfo.map((info) => {
                return (
                  <>
                    {info.value}
                    <br />
                  </>
                );
              })}
            </div>

            <div className="w-1/4">
              <Image className="mb-2"
                src="/deviceInfoIcons/camera.png"
                width={50}
                height={50}
                alt="img"
              />
              {cameraInfo.map((info) => {
                return (
                  <>
                    {info.value}
                    <br />
                  </>
                );
              })}
            </div>

            <div className="w-1/4">
              <Image className="mb-2"
                src="/deviceInfoIcons/chipset.png"
                width={50}
                height={50}
                alt="img"
              />
              {chipsetInfo.map((info) => {
                return (
                  <>
                    {info.value}
                    <br />
                  </>
                );
              })}
            </div>

            <div className="w-1/4">
              <Image className="mb-2"
                src="/deviceInfoIcons/battery.png"
                width={50}
                height={50}
                alt="img"
              />
              {batteryInfo.map((info) => {
                return (
                  <>
                    {info.value}
                    <br />
                  </>
                );
              })}
            </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-2 border-y-4" />

      {deviceDetails.detailSpec.map((spec, index) => {
        return (
          <div key={index}>
            <h2 className="text-3xl text-sky-500 mb-4">{spec.category}</h2>
            <div>
              {spec.specifications.map((subSpec, index) => {
                return (
                  <>
                    <hr className="my-1" />
                    <table key={index}>
                      <tbody>
                        <tr>
                          <td className="w-32 font-bold">{subSpec.name}</td>
                          <td className="">{subSpec.value}</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                );
              })}
            </div>

            <hr className="my-2 border-y-4" />
          </div>
        );
      })}
    </div>
  );
}
