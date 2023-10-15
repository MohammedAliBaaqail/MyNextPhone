
import Hero from "./components/Hero";
import TopBrands from "./components/TopBrands";
import TopDevicesByFans from "./components/TopDevicesByFans";
import TopDevicesByDailyInterest from "./components/TopDevicesByDailyInterest";


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
