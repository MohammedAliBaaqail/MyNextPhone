import Image from "next/image";
import Link from "next/link";
import getDeviceDetails from "@/api/getDeviceDetails";
import { Container } from "postcss";

type deviceIdProps = {
  deviceId: string;
  name: string;
  img?: string;
};

export default async function deviceCard(props: deviceIdProps) {
  // const deviceDetailsData: Promise<deviceDetails> = getDeviceDetails(props.deviceId);
  // const deviceDetails = await deviceDetailsData;

  return (
  
      <Link
        href={`/devices/${props.deviceId}`}
        className=" w-5/12 m-1 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
      >
        {props.img && (
          <Image
            className="w-1/4"
            src={props.img}
            alt={props.name}
            width={100}
            height={100}
          />
        )}
        {/* <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={deviceDetails.img}
          alt={deviceDetails.name}
          width={80}
          height={106}
        /> */}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {/* {deviceDetails.name} */}
            {props.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            {/* {deviceDetails.detailSpec[1].specifications[1].value} */}
          </p>
        </div>
      </Link>
    
  );
}
