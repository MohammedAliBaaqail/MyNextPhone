import getDeviceDetails from "@/lib/getDeviceDetails"



type Params = {
    params: {
      deviceId: string
    }
}

export default async function page({params: { deviceId } }:Params) {
    const deviceDetailsData: Promise<deviceDetails> = getDeviceDetails(deviceId)
    const deviceDetails = await deviceDetailsData
    // console.log(deviceDetails.detailSpec[0].specifications[0].value)
  return (
    <div>
      <h1 className="text-3xl">
        {deviceDetails.name}
      </h1>
      <h2 className="text-2xl">
        Network Technology:
      {deviceDetails.detailSpec[0].specifications[0].value}
      </h2>
      
{/*       
      {deviceDetails.detailSpec[0].specifications.map((spec) => {
        return (
          <>
          <p>{spec.name}</p>
     
          </>
     
        )
      })} */}
     


    </div>
  )
}
