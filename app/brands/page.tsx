import getAllBrands from "@/api/getAllBrands";
import Link from "next/link";

export default async function brands() {
  const brandsData: Promise<brand[]> = getAllBrands();
  const brands = await brandsData;


  return (
    <div>
      {brands.map((brand) => (
        <div>
            <Link href={`/brands/${brand.id}`}>
          <h2>{brand.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
