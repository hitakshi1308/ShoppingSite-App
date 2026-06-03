import { useEffect, useState } from "react";
import { Link } from "react-router";
import "../../../styles/ProductSection.css";
import ProductCard from "./ProductCard";

function ProductSection() {

    const [products, setProducts] = useState([])
    const [limit, setLimit]= useState(10)
    const [hasMore, setHasMore] = useState(true);

    useEffect(() =>{
        getProducts();
    },[limit])

    const fetchMoreProducts = () =>{
      setLimit((prev) => prev + 10);
      
    }

    const getProducts = async() =>{
        const url = `https://fakestoreapi.com/products?limit=${limit}`

        let response = await fetch(url);
        response = await response.json();
        // console.log(response);
        setProducts(response);

        if (response.length === products.length) {
          setHasMore(false);
        }
    }
    

  return (
    <section className="products-section">
      <h2 className="section-title">NEW ARRIVALS</h2>

      <div className="products-grid">
        {products && products.map((item) => (
          <div className="product-card" key={item.id}>
            <ProductCard item={item} source={"fakestore"}/>
          </div>
        ))}
      </div>

      <button disabled={!hasMore} className="view-btn" onClick={fetchMoreProducts}>View More</button>
    </section>
  );
}

export default ProductSection;