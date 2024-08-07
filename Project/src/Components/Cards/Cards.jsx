import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Cards.css'    
export default function Cards() {
  return (
    <div>
      <div className="container ">
      <div className="row">
      <div className = "collection-list mt-4 row gx-0 gy-3">
      <div  className='section-tile'><h3 className="text-uppercase fw-5 ls-1">CATEGORIES TO BAG</h3></div><br></br>
      {/* FirstImg */}
      <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
        <div className = "collection-img position-relative text-center">
           <a href='/Dress'><img src = "../images/Img65.jpg" style={{width:"11rem",height:"11rem",borderRadius:"90%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
         </div>
        <div className = "text-center">
           <p className = "text-capitalize fw-bold fs-5 text-regal-blue">Dress</p>
        </div>
      </div>

      {/* SecondImg */}
      <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
         <div className = "collection-img position-relative text-center">
           <a href='/cosmetics'><img src = "../images/Img61.avif"style={{width:"11rem",height:"11rem",borderRadius:"90%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
        </div>
      <div className = "text-center">
          <p className = "text-capitalize fw-bold fs-5 text-regal-blue">Cosmetics</p>
      </div>
    </div>

      {/* ThirgImg */}
     <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
        <div className = "collection-img position-relative text-center">
         <a href='/Accessories'><img src = "../images/Img35.webp" style={{width:"11rem",height:"11rem",borderRadius:"90%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
        </div>
        <div className = "text-center">
             <p className = "text-capitalize fw-bold fs-5 text-regal-blue">Jewellery</p>
        </div>
    </div>
    
    {/* FourthImg */}
    <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
         <div className = "collection-img position-relative text-center">
           <a href='/Flats'><img src = "../images/Img63.avif" style={{width:"11rem",height:"11rem",borderRadius:"90%",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
        </div>
        <div className = "text-center">
            <p className = "text-capitalize fw-bold fs-5 text-regal-blue">Slippers</p>
         </div>
    </div>                   
     </div>
     </div>
     </div>
    </div>
  )
}
