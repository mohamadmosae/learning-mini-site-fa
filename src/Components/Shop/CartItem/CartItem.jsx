import React from "react";
import { MdDelete } from "react-icons/md";
import "./CartItem.css"
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../Redux/Slices/cart";
const CartItem = ({item}) => {
const dispatch=useDispatch()
const clickhandler=(x)=>{
      console.log(x);
      
dispatch(removeFromCart(x))

}


  return (
    <div className="cartItem">
      <div className="right">
        <img
          src={item.image}
          alt="curses"
        />
        <p>{item.title}</p>
      </div>
      <div className="left ">
<span onClick={()=>clickhandler(item)}>

<MdDelete size="25px" />

</span>
        <p> {item.price.toLocaleString()}:تومان </p>
      </div>
    </div>
  );
};

export default CartItem;
