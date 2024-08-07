import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Deals.css'
function Deals() {
  return (
    <div>
      <div className="container ">
      <div className="row">
      <div className = "collection-list mt-4 row gx-0 gy-3">
      <div  className='section-tile'><h3 className="text-uppercase fw-7 ls-1 text-center">DEALS YOU DON'T WANT TO MISS</h3></div>
      {/* FirstImg */}
      <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
        <div className = "collection-img position-relative text-center">
           <a href='/Dress'><img src = "../images/Img54.avif" style={{width:"15rem",height:"15rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
         </div>
        
      </div>

      {/* SecondImg */}
      <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
         <div className = "collection-img position-relative text-center">
           <a href='/cosmetics'><img src = "../images/Img55.avif"style={{width:"15rem",height:"15rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
        </div>
    
    </div>

      {/* ThirgImg */}
     <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
        <div className = "collection-img position-relative text-center">
         <a href='/Accessories'><img src = "../images/Img56.avif" style={{width:"15rem",height:"15rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
        </div>
      
    </div>
 
    <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
        <div className = "collection-img position-relative text-center">
         <a href='/Accessories'><img src = "../images/Img57.avif" style={{width:"15rem",height:"15rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
        </div>
       
    </div>
    
    
   
         
    </div>                   
     </div>
     </div>
     </div>
  

  )
}

export default Deals
