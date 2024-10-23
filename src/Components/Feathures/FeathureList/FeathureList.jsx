import React from 'react'
import FeathuerItem from '../FeathuerItem/FeathuerItem'
import "./FeathureList.css"
import { SiUbereats } from 'react-icons/si'
import { FaRegFaceSmileBeam } from 'react-icons/fa6'
import { GrUpdate } from 'react-icons/gr'
import { BiSupport } from 'react-icons/bi'
import { useSelector } from 'react-redux'

const FeathureList = () => {
  const items=[
    {
      id:1,
      title:"پشتیبانی قوی",
      icon: <BiSupport />
    },
    {
      id:2,
      title:" رضایت دانشجو ها",
      icon: <FaRegFaceSmileBeam />
    },
    {
      id:3,
      title:"بروز رسانی",
      icon:  <GrUpdate />
    }
  ]
  const theme=useSelector(x=>x.theme.theme)
  return (
         <div className={`feathureListContainer ${theme}`}>
         <div className="container">
   <h2>چرا نکست وان کد؟</h2>
   <div className="feathureList">
    {
      items?.map(elem=>{
       return <FeathuerItem key={elem.id} item={elem}/>
      })
    }
      
   </div>
         </div>
       </div>
  )
}

export default FeathureList
