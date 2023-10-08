const gsmarena = require("gsmarena-api");

export default async function getDeviceListByBrand(brandName: string) {
  try {
    const res = await gsmarena.catalog.getBrand(brandName);

    return res;
  } catch (error) {
    return undefined;
  }
}
