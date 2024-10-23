import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import "./FeathuerItem.css"
const FeathuerItem = ({item}) => {
        const theme=useSelector(x=>x.theme.theme)
  return (
    <div>
          <div>
      <div className={`feathureContaner ${theme}`}>
        <p className='icon'>
       {item.icon}
        </p>
        <h2>{item.title}</h2>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم </p>
      </div>
    </div>
    </div>
  )
}

export default FeathuerItem
