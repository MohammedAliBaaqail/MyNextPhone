const gsmarena = require('gsmarena-api');

export default async function getTopDevices() {
    const res = await gsmarena.top.get();
    if (!res)
    throw new Error("Somethin went wrong!")
  return (
    res
  )
}
