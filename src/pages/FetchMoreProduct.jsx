import { useEffect, useState } from "react";
import ".././styles/ProductSection.css";
import ProductCard from "./homepage/components/ProductCard";

export default function FetchMoreProuct() {
    const [moreProductData, setMoreProductData] = useState([])
    
    useEffect(() =>{
        getProducts();
    })
    const getProducts = async() =>{
 
        const url = "https://dummyjson.com/products"

        let response = await fetch(url);
        response = await response.json();

        console.log(response.products);
        setMoreProductData(response.products);
    }

    return (
        <section className="products-section">
              <h2 className="section-title">NEW ARRIVALS</h2>
        
              <div className="products-grid">
                {moreProductData && moreProductData.map((item) => (
                  <div className="product-card" key={item.id}>
                    <ProductCard item={item}/>
                  </div>
                ))}
              </div>
        
              {/* <button disabled={!hasMore} className="view-btn" onClick={fetchMoreProducts}>View More</button> */}
        </section>

    )
}