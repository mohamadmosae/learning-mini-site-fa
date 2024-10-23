import React from "react";
import "./SingleCource.css";
import { useDispatch, useSelector } from "react-redux";
import { FaCalendarDay, FaRegCreditCard, FaStar } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { GiTrafficLightsGreen } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { addToCart } from "../../Redux/Slices/cart";
import toast, { Toaster } from "react-hot-toast";

const SingleCource = () => {
  const { loading, error, course } = useSelector((x) => x.single);
  const { addedtoProduct} = useSelector((x) => x.cart);
  const dispatch=useDispatch()

  const clickhandler = (elem) => {
    const x = addedtoProduct.some((product) => product.id === elem.id);
    if (x) {
      toast.error("دوره مورد نظر در سبد خرید وجود دارد");
    } else {
      toast.success("دوره مورد نظر با موفقیت به سبد خرید اظافه شد ");
      dispatch(addToCart(elem));
    }
  };





//   const clickhandler=(course)=>{
// dispatch(addToCart(course))

//   }
  return (
    <>
    <Toaster position="top-right" />
      <div className="singleCountaner ">
        {/* header */}
        <div className="cartheader">
          <h2 className="headertext">دوره آموزش بوت استرپ</h2>
        </div>
        <div className="cartmain container">
          {/* img div */}
          <div className="imgcart">
            <img
              src={course.image}
              alt="course"
            />
          </div>
          {/* info */}
          <div className="infocart">
            <div className="first">
              <div className="price">
                <div className="top">
                  <div className="a">قیمت</div>
                  <div className="b">{course.price} تومان</div>
                </div>
              </div>
              <div onClick={()=>clickhandler(course)} className="subcurse">
                <FaRegCreditCard size="20px" />
                ثبت نام کنید
              </div>
              <div className="rate">
                <p>امتیاز 5 از 1رای</p>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="secend">
              <div className="teacher">
                <PiStudent color="#b7b7b7" size="30px" />
                <p>تعداد دانشجو : {course.studentCount} نفر</p>
              </div>
              <div className="prer">
                <GiTrafficLightsGreen size="30px" color="  #b7b7b7" />
                پیش نیاز : css html
              </div>
              <div className="prer">
                <FaCalendarDay size="30px" color=" #b7b7b7" />
                تاریخ شروع : 12/8/1403
              </div>
              <div className="prer">
                <BiSupport size="30px" color="    #b7b7b7" /> روش
                پشتیبانی: تلگرام
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCource;
