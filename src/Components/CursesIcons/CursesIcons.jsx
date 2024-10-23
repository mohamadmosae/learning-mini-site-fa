import React from "react";
import "./CursesIcons.css";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import { useSelector } from "react-redux";
const CursesIcons = () => {
        const  theme=useSelector(x=>x.theme.theme)
  return (
    <div>
      <div className={`coursesIconCountaner ${theme}`}>
        <div className="container">
         <h2>دنبال کدوم آموزش میگردی؟</h2>
         <div className="coursesIconList">
                  <div className="coursesIcon">
                         <RiNextjsFill />  
                  </div>
                  <div className="coursesIcon">
                  <IoLogoNodejs /> 
                  </div>
                  <div className="coursesIcon">
                  <GrReactjs />
                  </div>
                  <div className="coursesIcon">
                  <FaBootstrap /> 
                  </div>
                  <div className="coursesIcon">
                  <RiTailwindCssFill /> 
                  </div>
                  <div className="coursesIcon">
                  <SiMysql /> 
                  </div>
                  <div className="coursesIcon">
                  <SiMongodb />  
                  </div>
         </div>
        </div>
      </div>
      {/* 
     
 
     
      
      
     */}
    </div>
  );
};

export default CursesIcons;
