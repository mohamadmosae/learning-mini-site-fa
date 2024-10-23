import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { BsCart } from 'react-icons/bs'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../Redux/Slices/theme'
const Navbar = () => {
  const dispatch=useDispatch()
  const theme= useSelector(x=>x.theme.theme)
  const addedToCart= useSelector(x=>x.cart.addedToCart)
  const themeHandler=()=>{
dispatch(toggleTheme(theme))
  }
  return (
    <div className={`navabarContainer ${theme} `}>
    <div className='navbar container'>
       <ul>
          <li>
             <Link to='/'>صفحه اصلی</Link>
          </li>
          <li>
             <Link to='/about'>درباره ما</Link>
          </li>
          <li>
             <Link to='/contact'>تماس با ما</Link>
          </li>
       </ul>
       <div className='icons'>
          <span className='cartIcon'>
             <Link to='/cart'>
                <BsCart size='25px' />
             </Link>
             {addedToCart>0&&<span>{addedToCart}</span>}
          </span>
          <span onClick={themeHandler} className='darkModeIcon'>
             {
              theme==="dark"?<MdOutlineLightMode size='25px' />:<MdOutlineDarkMode size='25px' />
             }
          </span>
       </div>
    </div>
 </div>
  )
}

export default Navbar
