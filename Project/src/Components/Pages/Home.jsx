import React from 'react'
import BootstrapCarousal from '../Carousal/BootstrapCarousal'
import Cards from '../Cards/Cards'
import BootstrapFooter from '../Footer/BootstrapFooter'
// import SetImg from '../SetImg/SetImg'
import OurProduct from '../OurProducts/OurProduct'

function Home(){
  return (
    <div>
      <BootstrapCarousal/>
      <br></br>
      <Cards/>
      <br></br>
      {/* <SetImg/> */}
      <OurProduct/>
      <br></br>
      <BootstrapFooter/>
    </div>
  )
}

export default Home
