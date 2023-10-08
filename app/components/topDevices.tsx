import getTopDevices from '@/api/getTopDevices'
import Link from 'next/link'
import DeviceCard from './DeviceCard'

import { notFound } from "next/navigation";



export default async function topDevices() {

    const topDevicesData : Promise<topDevices> = getTopDevices()
    const topDevices = await topDevicesData
    // console.log(topDevices[1].list)
    if (!topDevices) return notFound()
  return (
    <div>
        
        {
        topDevices.map((devicesList)=>{
            return(
             <>
             {<h2 className='text-3xl'>{devicesList.category}</h2>}
             <div>
             {devicesList.list.map((device)=>{
                return(
                    
                    <Link href={`/devices/${device.id}`}>
                    
                   <DeviceCard deviceId={device.id} name={device.name} />
                   {/* <h3>{device.dailyHits|device.favorites}</h3> */}
                   </Link>
                  
                )
             }
             )}
              </div>
             </>)
             }
             )
             }
    </div>
  )
}
