const gsmarena = require('gsmarena-api');

export default async function getDeviceDetails(deviceId : string) {
    const res = await gsmarena.catalog.getDevice(deviceId);

  if (!res)
    throw new Error("Somethin went wrong!")
  return res
}
