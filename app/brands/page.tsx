import getAllBrands from "@/lib/getAllBrands";

export default async function brands() {
  const brandsData: Promise<brand[]> = getAllBrands();
  const brands = await brandsData;

  return (
    <div>
      {brands.map((brand) => (
        <div>
          <h2>{brand.name}</h2>
        </div>
      ))}
    </div>
  );
}
