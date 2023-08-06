import React from 'react'
import Services from '../Page-Components/Services'
import About from '../Page-Components/About'
import Clients from '../Page-Components/Clients'
import Banner from '../Page-Components/Banner'
function Home() {
  return (
    <div className='Home'>
      <Banner />
      <Services />
      <About />
      <Clients />
    </div>
  )
}

export default Home