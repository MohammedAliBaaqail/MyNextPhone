const gsmarena = require('gsmarena-api');

export default async function getTopDevices() {

    try {

      const res = await gsmarena.top.get();
      return res;
    } catch (error) {
      return undefined;
    }
    }