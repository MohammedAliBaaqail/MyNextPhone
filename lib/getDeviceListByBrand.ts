const gsmarena = require('gsmarena-api');

export default async function getDeviceListByBrand(brandName: string) {
const res = await gsmarena.catalog.getBrand(brandName);

  if (!res)
    throw new Error("Somethin went wrong!")
  return res
}
