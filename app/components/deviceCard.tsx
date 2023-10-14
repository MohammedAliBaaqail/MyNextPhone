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
      className="w-full md:w-5/12 props.img m-1 flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 "
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

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
      
          {props.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
       
        </p>
      </div>
    </Link>
  );
}
