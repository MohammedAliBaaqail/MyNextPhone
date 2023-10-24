

import getAllBrands from "@/api/getAllBrands";
import Link from "next/link";

type brandProps = {
  id: string;
  name: string;
  devices?: number;
  img?: string;
};

export default async function BrandCard(props: brandProps) {
  return (
    <Link
      href={`/brands/${props.id}/1`}
      className="zoomIn zoomOut p-2 w-3/12 m-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 max-sm:w-full "
    >

      {props.img && (
        <img
          className="w-1/4"
          src={props.img}
          alt={props.name}
          width={100}
          height={320}
        />
        
      )}
            <h2 className="text-3xl text-center">{props.name}</h2>
      {props.devices && <h3 className="text-xl">{props.devices} Devices</h3>}
    </Link>
  );
}
