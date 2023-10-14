import getTopDevices from '@/api/getTopDevices'

import DeviceCard from './DeviceCard'

import { notFound } from "next/navigation";



export default async function TopDevices() {

    const topDevicesData : Promise<topDevices> = getTopDevices()
    const topDevices = await topDevicesData
    // console.log(topDevices[1].list)
    if (!topDevices) return notFound()
  return (
    <div >
        <h1 className='text-5xl text-center mb-4'>Popular Devices</h1>
        {
        topDevices.map((devicesList)=>{
            return(
             <div className=''>
             {<h2 className='text-3xl mx-4  mb-3 mt-10'>{devicesList.category}</h2>}
             <div className='flex flex-wrap flex-row justify-evenly'>
             {devicesList.list.map((device)=>{
                return(
                    
                    
                    
                   <DeviceCard key={device.id} deviceId={device.id} name={device.name} img={"/images/phone.jpg"} />
                
                  
                  
                )
             }
             )}
              </div>
             </div>)
             }
             )
             }
    </div>
  )
}
