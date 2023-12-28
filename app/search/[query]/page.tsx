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
    <div className=" flex flex-wrap justify-center custom_layout py-10 md:px-3 ">
      {filteredDevices.length <= 0 ? (
        <h1 className="text-cyan-600 text-2xl">Not Found</h1>
      ) : (
        filteredDevices.map((device, index: number) => {
          let isEven = index % 2 === 0;
          return (
            <DeviceCard
              deviceId={device.id}
              name={device.name}
              img={device.img}
              isEven={isEven}
            />
          );
        })
      )}
    </div>
  );
}
