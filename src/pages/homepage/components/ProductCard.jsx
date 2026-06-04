import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addItem } from "../../../redux/slice";

export default function ProductCard({item,source}) {
   
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.cart.items)
    
    return(
        <>
            <img className="product-card-img" src={item.image ? item.image : item.thumbnail} alt={item.title} />

            <h3>{item.title ? item.title.slice(0,35)+'...' :  item.title}</h3>

            {item.rating.rate ? <p className="rating"> ★ {item.rating.rate} </p> : <p className="rating"> {item.rating} ★</p>}

            <p className="price">$ {item.price}</p>
            <Link to={`/productDetail/${item.source? item.source : source}/${item.id}`}><button className="buttons button" >View Product</button></Link>
            <button className="buttons button" onClick={() => dispatch(addItem(item))}>Add To Cart</button>

        </>
    )
}