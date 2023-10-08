import searchForDevices from "@/api/searchForDevices";
import DeviceCard from "@/app/components/DeviceCard";

type Params = {
  params: {
    query: string;
  };
};

export default async function SearchDevices({ params: { query } }: Params) {
  const searchedDevices: Promise<searchedDevices> = searchForDevices(query);
  const filteredDevices = await searchedDevices;
  return (
    <div className=" flex flex-wrap justify-center ">
      {filteredDevices.map((device) => {
        return (
      
            <DeviceCard
              deviceId={device.id}
              name={device.name}
              img={device.img}
            />
        
        );
      })}
      {/* <DeviceCard deviceId={query} name={query}/> */}
    </div>
  );
}
