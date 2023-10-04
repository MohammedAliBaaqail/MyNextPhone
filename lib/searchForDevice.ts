const gsmarena = require('gsmarena-api');

export default async function getDeviceListByBrand(device: string) {


    try {

      const res = await gsmarena.search.search(device);
      return res;
    } catch (error) {
      return undefined;
    }
    }