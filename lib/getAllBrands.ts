const gsmarena = require('gsmarena-api');

export default async function getAllBrands() {
  const res = await gsmarena.catalog.getBrands();

  if (!res)
    throw new Error("Somethin went wrong!")
  return res
}
