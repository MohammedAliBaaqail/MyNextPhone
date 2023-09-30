import getDeviceDetails from "@/lib/getDeviceDetails";
import type { Metadata } from "next";
import Image from "next/image";

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
  return {
    title: deviceDetails.name,
    description: deviceDetails.name,
  };
}

export default async function page({ params: { deviceId } }: Params) {
  const deviceDetailsData: Promise<deviceDetails> = getDeviceDetails(deviceId);
  const deviceDetails = await deviceDetailsData;
  // console.log(deviceDetails.detailSpec[1])

  return (
    <div>
      <h1 className="text-4xl">{deviceDetails.name}</h1>
      <Image
        src={deviceDetails.img}
        alt={deviceDetails.name}
        width={160}
        height={212}
      />
      {deviceDetails.detailSpec.map((spec, index) => {
        return (
          <div key={index}>
            <h2 className="text-3xl">{spec.category}</h2>

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
