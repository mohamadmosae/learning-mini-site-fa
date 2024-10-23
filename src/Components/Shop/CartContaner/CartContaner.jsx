import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import "./CartContaner.css";
import CartItem from "../CartItem/CartItem";
const CartContaner = () => {
  const { addedToCart, addedtoProduct, total } = useSelector((x) => x.cart);
const theme=useSelector(x=>x.theme.theme)
  return (
    <div className={`cartPageContaner ${theme}`} >
      <div className="cartPage">
        {addedToCart == 0 && (
          <div className="cartEmpty">
            <BsCart4 size='80px'/>
            <h1>سبد خرید خالی است</h1>
          </div>
        )}
        {addedToCart > 0 && (
          <div className="noEmptyCart">
            <div className="itemsContaner">
{
  addedtoProduct?.map(elem=>{
    return <CartItem  key={elem.id} item={elem} />
  })
}
            </div>
            <div className="totalCart">
              <span>
                <p>مجموع سبد خرید:</p>
                <b>{total.toLocaleString()}:تومان</b>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContaner;
