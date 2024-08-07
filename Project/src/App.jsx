import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Cart from './Components/Pages/Cart'
import About from './Components/Pages/About'
import Dress from './Components/Pages/Dress'
import Cosmetics from './Components/Pages/Cosmetics'
import Accessories from './Components/Pages/Accessories'
import Bags from './Components/Pages/Bags'
import Flats from './Components/Pages/Flats'
import Signup from './Components/Pages/Signup'
import Tops from './Components/Pages/Tops'
import Dream from './Components/Pages/Dream'
import Jump from './Components/Pages/Jump'
import AdminPanel from './Components/Pages1/AdminPanel'
import AdminTable from './Components/Pages1/AdminTable'
import ProductTable from './Components/Pages1/ProductTable'
import HomeLayout from './Components/layouts/HomeLayout'
import AdminLayout from './Components/layouts/AdminLayout'
import Under699 from './Components/Pages/Under699'
import Under799 from './Components/Pages/Under799'
import Search from './Components/Search/Search'
import Productdetails from './Components/Cart/Productdetials'



const App = () => {
  return (
    <>
   
    <div className='app'>

      <BrowserRouter>
      
      <Routes>
        
        <Route element={<HomeLayout />}>
          <Route index element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Dress' element={<Dress/>}/>
          <Route path='/cosmetics' element={<Cosmetics/>}/>
          <Route path='/Accessories' element={<Accessories/>}/>
          <Route path='/Bags' element={<Bags/>}/>
          <Route path='/Flats' element={<Flats/>}/>
          <Route path='/SignUp' element={<Signup/>}/>
          <Route path='/Tops' element={<Tops/>}/>
          <Route path='/Dream' element={<Dream/>}/>
          <Route path='/Jump' element={<Jump/>}/>
          <Route path='/under699' element={<Under699/>}/>
          <Route path='/under799' element={<Under799/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/ProductDetials' element={<Productdetails/>}/>
          </Route>

        <Route element={<AdminLayout />}>
          <Route path='/product' element={<AdminPanel/>}/>
          <Route path='/table' element={<AdminTable/>}/>
          <Route path='/Producttable' element={<ProductTable/>}/>
        </Route>

      </Routes>
      </BrowserRouter>      
    </div>
    </>
  )
}

export default App
