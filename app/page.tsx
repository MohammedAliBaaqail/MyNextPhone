
import Hero from "./components/Hero";
import TopBrands from "./components/TopBrands";
import TopDevicesByFans from "./components/TopDevicesByFans";
import TopDevicesByDailyInterest from "./components/TopDevicesByDailyInterest";
import { Metadata } from "next";
import getTopDevices from "@/api/getTopDevices";



export const metadata: Metadata = {
  title: "My Next Phone",
  description: "Your Guide To Get The Perfict Phone For You!",
  // icons:{
  //   icon: "/images/favicon.ico",
  // }
};
export default async function Home() {
  const topDevicesData: Promise<topDevices> = getTopDevices();
  const topDevices = await topDevicesData;
  console.log(topDevices)

  

  return (
    <>
      <Hero />

      <section className="  py-8 custom_layout">
        {/* <TopDevices /> */}
        <TopDevicesByFans {...topDevices} />
      </section>
      <section className=" w-full max-h-max  hero_bg bg-cover bg-center  ">
        <TopBrands />
      </section>
      <section className="  py-8 custom_layout">
        {/* <TopDevices /> */}
        <TopDevicesByDailyInterest {...topDevices} />
      </section>

    </>
  );
}
