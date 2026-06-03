import { useParams } from "react-router";
import "../styles/ProductSection.css";
import ProductCard from "./homepage/components/ProductCard";
import { useEffect, useState } from "react";

export default function ProductBrand() {
  const params = useParams();

  const [products, setProducts] = useState([])

  useEffect(() =>{
    getProducts()
  },[params.brandName])

//   console.log(params.brandName);
  const getProducts = async() =>{
    const url = 'http://localhost:3000/products'

    let response = await fetch(url);
     response = await response.json();
     const data = response.filter((item) => item.brand.toLowerCase() === params.brandName.toLowerCase())
     setProducts(data)
    //  console.log(data)
  }


  return (
    <section className="products-section">
      <h2 className="section-title">{params.brandName}</h2>
      <div className="products-grid">
      {products && products.map((item) => (
        <div className="product-card" key={item.id}>
          <ProductCard item={item} />
        </div>
      ))}
    </div>
    </section>
  );
}
