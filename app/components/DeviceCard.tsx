import Link from "next/link";
import getDeviceDetails from "@/api/getDeviceDetails";
import { notFound } from "next/navigation";

type deviceIdProps = {
  deviceId: string;
  name: string;
  img?: string;
  isEven?: boolean;
};

export default async function DeviceCard(props: deviceIdProps) {
  return (
    <Link
      href={`/devices/${props.deviceId}`}
      className={`${
        props.isEven ? "fadeInLeft" : "fadeInRight"
      } w-full md:w-5/12 props.img m-3 flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 `}
    >
      <img
        className="w-1/4"
        src={props.img}
        alt={props.name}
        width={100}
        height={100}
      />

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className=" text-2xl font-bold tracking-tight text-gray-900 max-md:text-lg">
          {props.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 "></p>
      </div>
    </Link>
  );
}
