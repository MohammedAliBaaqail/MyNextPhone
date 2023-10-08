const gsmarena = require('gsmarena-api');

export default async function getAllBrands() {
 

  try {
    const res = await gsmarena.catalog.getBrands();

    return res;
  } catch (error) {
    return undefined;
  }
  }



