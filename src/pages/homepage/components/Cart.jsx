import { useSelector } from "react-redux";
import cartIcon from "../../../assets/images/cart.png";

export default function Cart() {
    const selector = useSelector((state) =>state.cart.items)
    // console.log(selector)
    
    return (
        <>
            <div className="cart-wrapper">
  <img src={cartIcon} alt="cart" />
  <span className="cart-count">
    {selector.length ? selector.length : 0}
  </span>
</div>
        </>
    )
}