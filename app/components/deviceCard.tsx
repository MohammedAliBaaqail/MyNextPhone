import Image from "next/image";
import Link from "next/link";
import getDeviceDetails from "@/lib/getDeviceDetails";

 type deviceIdProps = {
   
      deviceId: string;
       name?:String
   
  };

export default async function deviceCard(  props  : deviceIdProps) {
    // const deviceDetailsData: Promise<deviceDetails> = getDeviceDetails(props.deviceId);
    // const deviceDetails = await deviceDetailsData;
    

  return (
    <div>
      <Link
        href={`/devices/${props.deviceId}`}
        
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
      >
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
    </div>
  );
}
