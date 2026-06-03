import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "./homepage/components/ProductCard";
import { getAllProductData } from "./AllProducts";

export default function ShopProducts() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!category) {
      setFilteredProducts(products);
      return;
    }

    const categoryMap = {
      "mens-clothing": "men's clothing",
      "womens-clothing": "women's clothing",
      "kids": "kids",
      "jewelery": "jewelery",
      "electronics": "electronics",
      "bags": "bags",
      "footwear": "footwear"

    };

    const selectedCategory = categoryMap[category];

    const filtered = products.filter(
      (item) =>
        item.category?.toLowerCase() ===
        selectedCategory?.toLowerCase()
    );

    setFilteredProducts(filtered);
  }, [category, products]);

  const fetchProducts = async () => {
    const data = await getAllProductData();

    setProducts(data);
    setFilteredProducts(data);
  };

  return (
    <section className="products-section">
      <h2 className="section-title">
        {category
          ? category.replace("-", " ").toUpperCase()
          : "SHOP PRODUCTS"}
      </h2>

      <div className="products-grid">
        {filteredProducts.map((item) => (
          <div
            className="product-card"
            key={item.id}
          >
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}