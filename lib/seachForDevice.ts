const gsmarena = require('gsmarena-api');

export default async function getDeviceListByBrand(device: string) {
    const res = await gsmarena.search.search(device);

  if (!res)
    throw new Error("Somethin went wrong!")
  return res
}
