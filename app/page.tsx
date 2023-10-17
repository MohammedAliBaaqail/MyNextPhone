
import Hero from "./components/Hero";
import TopBrands from "./components/TopBrands";
import TopDevicesByFans from "./components/TopDevicesByFans";
import TopDevicesByDailyInterest from "./components/TopDevicesByDailyInterest";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "My Next Phone",
  description: "Your Guide To Get The Perfict Phone For You!",
  // icons:{
  //   icon: "/images/favicon.ico",
  // }
};
export default async function Home() {


  return (
    <>
      <Hero />

      <section className="  py-8 custom_layout">
        {/* <TopDevices /> */}
        <TopDevicesByFans />
      </section>
      <section className=" w-full max-h-max  hero_bg bg-cover bg-center  ">
        <TopBrands />
      </section>
      <section className="  py-8 custom_layout">
        {/* <TopDevices /> */}
        <TopDevicesByDailyInterest />
      </section>

    </>
  );
}
