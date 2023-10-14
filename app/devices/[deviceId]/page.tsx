import getDeviceDetails from "@/api/getDeviceDetails";
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
  const deviceDetailsData: Promise<deviceDetails> = getDeviceDetails(deviceId);
  const deviceDetails = await deviceDetailsData;

  // const deviceDetails = placeHolderData;
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
  // const deviceDetails = placeHolderData;

  if (!deviceDetails) return notFound();

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


//organize the data so that it is easier to use later on
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


  return (
    <div className="   bg-100000% bg-zoomed  custom_layout max-md:!bg-none " style={{
      backgroundImage: `url(${deviceDetails.img})`
      }}>
      <div className={`rounded-t-lg overflow-hidden bg-[#ffffff59]  `}>
        <h1 className=" text-4xl p-2  ">{deviceDetails.name}</h1>
        <section className="flex flex-row  mb-12 max-md:flex-wrap gradient_background">
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
              <div className="w-full h-1/2">
                Announced {deviceDetails.detailSpec[1].specifications[0].value}
              </div>
              <div className="w-full h-1/2">
                {deviceDetails.detailSpec[1].specifications[1].value}
              </div>
              <div className="w-full h-1/2 flex">
                <div className="w-1/4 font-semibold text-center">
                  <Image
                    className="mb-2 mx-auto"
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

                <div className="w-1/4 font-semibold text-center">
                  <Image
                    className="mb-2 mx-auto"
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

                <div className="w-1/4 font-semibold text-center">
                  <Image
                    className="mb-2 mx-auto"
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

                <div className="w-1/4 font-semibold text-center">
                  <Image
                    className="mb-2 mx-auto"
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
      </div>

      <section className="rounded-[inherit] p-3 rounded-t-lg bg-[#ffffff9e]">
        

        {deviceDetails.detailSpec.map((spec, index) => {
          return (
            <div key={index}>
              <h2 className="text-4xl  mb-4">{spec.category}</h2>
              <div>
                {spec.specifications.map((subSpec, index) => {
                  return (
                    <>
                      <hr className="my-1 border-[#00000012]" />
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
                {index != (deviceDetails.detailSpec.length - 1) && <hr className="my-2 border-y-4 border-[#00000012]" />}
       
            </div>
          );
        })}
      </section>
    </div>
  );
}
