import React, { useEffect } from "react";
import "./CursesSection.css";
import CourseItem from "../CourseItem/CourseItem"
import { useDispatch, useSelector } from "react-redux";
import { fetchcurses } from "../../../Redux/Slices/curses";

const CursesSection = () => {
  const theme = useSelector((x) => x.theme.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcurses());
  }, []);

  const{data,loading,errorMessage} = useSelector((x) => x.courses);
  return (
    <div className={`cursesSectionCuntainer ${theme} `}>
      <h2 className="newcorses"> جدید ترین دوره های آموزشی</h2>
      <div className="row">
        {
errorMessage&&<h1 style={{margin:"0 auto",marginTop:"50px",color:"crimson"}}>{errorMessage}</h1>
        }
     {
      loading? <h1 style={{margin:"0 auto",marginTop:"50px"}}>درحال دریافت اطلاعات</h1>:data.length>0&& data.map(elem=>{
        return <CourseItem key={elem.id} item={elem} />
      })

     }
      </div>
    </div>
  );
};

export default CursesSection;
