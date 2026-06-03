import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  clearAllItem,
  updateQuantity,
} from "../redux/slice";

import { useNavigate } from "react-router";

import "../styles/CartList.css";

export default function CartList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const isLoggedIn = useSelector(
    (state) => state.auth.isLoggedIn
  );

  const manageQuantity = (id, value) => {
    const quantity = Math.max(
      1,
      parseInt(value) || 1
    );

    dispatch(
      updateQuantity({
        id,
        quantity,
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

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum +
      item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-heading">
        <h2>Your Cart</h2>

        <h3>
          {cartItems.length} Item
          {cartItems.length !== 1 ? "s" : ""}
        </h3>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="cart-item"
          >
            <div className="cart-info">
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="item-details">
                <h4>{item.title}</h4>
              </div>
            </div>

            <div className="item-action">
              <div className="item-div">
                <input
                  type="number"
                  min="1"
                  value={item.quantity || 1}
                  onChange={(e) =>
                    manageQuantity(
                      item.id,
                      e.target.value
                    )
                  }
                />

                <div>
                  <span className="price">
                    $
                    {(
                      item.price *
                      (item.quantity || 1)
                    ).toFixed(2)}
                  </span>

                  <button
                    className="btn-remove"
                    onClick={() =>
                      dispatch(
                        removeItem(item)
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty.</h3>
        </div>
      )}

      <div className="cart-footer">
        Total : ${totalPrice.toFixed(2)}
      </div>

      {cartItems.length > 0 && (
        <button
          onClick={handlePlaceOrder}
          className="place-order-btn"
        >
          Place Order
        </button>
      )}
    </div>
  );
}