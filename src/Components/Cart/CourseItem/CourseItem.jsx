import React from "react";
import "./CourseItem.css";
import { FaRegSmile, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/Slices/cart";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { fetchcourse } from "../../../Redux/Slices/single";
const CourseItem = ({ item }) => {
  const theme = useSelector((x) => x.theme.theme);
  const list = useSelector((x) => x.cart.addedtoProduct);

  const dispatch = useDispatch();

  const clickhandler = (elem) => {
    const x = list.some((product) => product.id === elem.id);
    console.log(x);

    if (x) {
      toast.error("دوره مورد نظر در سبد خرید وجود دارد");
    } else {
      toast.success("دوره مورد نظر با موفقیت به سبد خرید اظافه شد ");
      dispatch(addToCart(elem));
    }
  };
  const singleHandler = (id) => {
dispatch(fetchcourse(id))


  };
  return (
    <>
      <Toaster position="top-right" />
      <div className="col">
        <div className={`CurseCart ${theme}`}>
          <div className="CurseHeader ">
            <Link to="/singleCours" onClick={() => singleHandler(item.id)} >
              <img src={item.image} alt="Course" />
            </Link>
          </div>
          <div className="cartBody">
            <div className="courstitle">{item.title}</div>
            <div className="coursDesc">
              لورم لورم لورم لورم لورم لورم لورم لورم
            </div>
            <div className="coursInfo">
              <div className="CourseTeacher">
                <span>
                  <FaRegSmile />
                </span>
                <p> {item.teacher}</p>
              </div>
            </div>
            <div className="courseStudent">
              <p>{item.studentCount}</p>
              <span>
                <FaUsers />
              </span>
            </div>
          </div>
          <div className="cartFooter">
            <button onClick={() => clickhandler(item)}>ثبت نام کنید</button>
            <span className="Price">{item.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
