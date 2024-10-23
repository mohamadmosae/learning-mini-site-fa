import React, { useEffect } from 'react'
import HomePage from '../Pages/HomePage/HomePage'
import CartPage from '../Pages/CartPage/CartPage'
import Aboute from '../Pages/AbutePage/Aboute'
import Contact from '../Pages/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navbar } from 'react-bootstrap'
import SingleCoursePage from '../Pages/SingleCoursePage/SingleCoursePage'

const App = () => {
  const theme=useSelector(x=>x.theme.theme)
  useEffect(()=>{
document.body.classList.toggle("dark")
  },[theme])
  return (
<>
<BrowserRouter>

  <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/cart' element={<CartPage/>} />
    <Route path='/abute' element={<Aboute/>} /> 
    <Route path='/contact' element={<Contact/>} />
    <Route path='/singleCours' element={<SingleCoursePage/>} />
  </Routes>
  </BrowserRouter>
</>
  )
}

export default App
