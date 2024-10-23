import React from 'react'
import "./HomePage.css"
import Navbar from '../../Navbar/Navbar'
import CursesIcons from '../../CursesIcons/CursesIcons'
import FeathureList from '../../Feathures/FeathureList/FeathureList'
import CursesSection from '../../Cart/CursesSection/CursesSection'
 

const HomePage = () => {
  return (
    <>
<Navbar/>
    
    
      <div className='container'>

<CursesIcons/>
<FeathureList/>
<CursesSection/>
   </div>  
    </>

  )
}

export default HomePage
