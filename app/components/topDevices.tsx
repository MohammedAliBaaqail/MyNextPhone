import getTopDevices from '@/lib/getTopDevices'


export default async function topDevices() {

    const topDevicesData : Promise<topDevices> = getTopDevices()
    const topDevices = await topDevicesData
    console.log(topDevices[1].list)
  return (
    <div>
        {
        topDevices.map((devicesList)=>{
            return(
             <div>
             {<h2 className='text-3xl'>{devicesList.category}</h2>}
             {devicesList.list.map((device)=>{
                return(
                    <div>
                   <h3>{device.name}</h3> 
                   {/* <h3>{device.dailyHits|device.favorites}</h3> */}
                   </div>
                )
             }
             )}
             </div>)
             }
             )
             }
    </div>
  )
}
