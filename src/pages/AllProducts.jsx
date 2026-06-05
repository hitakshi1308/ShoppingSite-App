import { LOCALDB_URL } from "../api/api";

export async function getAllProductData() {
  const [res1, res2] = await Promise.all([
    fetch("https://fakestoreapi.com/products"),
    fetch(`${LOCALDB_URL}/products`),
  ]);

  const data1 = await res1.json();
  const data2 = await res2.json();

  const allProducts = [
    ...data1.map((product) => ({
      ...product,
      source: "fakestore",
    })),
    ...data2.map((product) => ({
      ...product,
      source: "localdb",
    })),
  ];

  return allProducts;
}
