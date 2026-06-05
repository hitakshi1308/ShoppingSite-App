import { useNavigate, useParams } from "react-router";
import "../styles/ProductDetail.css";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addItem,clearAllItem, } from "../redux/slice";
import { LOCALDB_URL } from "../api/api";

import ProductSection from "./homepage/components/ProductSection";

export default function ProductDetail() {
  const {source, id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [productData, setProductData] = useState({});
  const [quantityCount, setQuantityCount] = useState(1); 
  const isLoggedIn = useSelector(
    (state) => state.auth.isLoggedIn
  );

  useEffect(() => {
  getProductData();
}, [source, id]);

;
  const getProductData = async () => {
        let url;

  if (source === "fakestore") {
    url = `https://fakestoreapi.com/products/${id}`;
  } else {
    url = `${LOCALDB_URL}/products/${id}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  setProductData(data);
    };

  

  const handleAddToCart = () => {
    dispatch(
      addItem({
        ...productData,
        quantity: quantityCount,
      })
    );
  };

  const handlePlaceOrder = () => {
    if (!isLoggedIn) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    dispatch(clearAllItem());

    alert("Your order has been placed successfully.");
    navigate("/");
  };

  return (
    <>
      <div className="product-container">
        <div className="product-image">
          <img
            src={productData?.image}
            alt={productData?.title}
          />
        </div>

        <div className="product-details">
          <h1>{productData?.title}</h1>

          <p className="product-price">
            ${productData?.price}
          </p>

          <p className="description">
            {productData?.description}
          </p>

          <div className="quantity">
            <button
              onClick={() =>
                setQuantityCount((prev) =>
                  prev > 1 ? prev - 1 : 1
                )
              }
            >
              -
            </button>

            <input
              type="number"
              min="1"
              value={quantityCount}
              onChange={(e) =>
                setQuantityCount(
                  Math.max(
                    1,
                    parseInt(e.target.value) || 1
                  )
                )
              }
            />

            <button
              onClick={() =>
                setQuantityCount(
                  (prev) => prev + 1
                )
              }
            >
              +
            </button>
          </div>

          <div className="buttons">
            <button
              className="add-cart"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button className="buy-now" onClick={handlePlaceOrder}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      
    </>
  );
}