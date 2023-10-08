const gsmarena = require('gsmarena-api');

export default async function getDeviceDetails(deviceId : String) {
  

    try {
      const res = await gsmarena.catalog.getDevice(deviceId);
      
      return res;
    } catch (error) {
     
      return undefined;
    }
}
