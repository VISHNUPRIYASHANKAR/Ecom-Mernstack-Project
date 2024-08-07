import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurProduct.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OurProduct() {
  return (
    <div>
      
     {/* <div>
      <center>
      <img 
        src = '../images/Img27.png' 
        style={{width:900,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"}}
        required className="imgfluid"
      />
      </center>
    </div> */}
    <div>
    
    <center>
    <h3>TRENDING CATEGORIES</h3></center><br></br>
    <Container>
      
      <Row>
        <Col> <a href='/Tops'><img src = '../images/Img51.avif' required className="imgfluid"/></a></Col>
        <Col> <a href='/Dream'><img src = '../images/Img52.avif' required className="imgfluid"/></a></Col>
        <Col> <a href='/Jump'><img src = '../images/Img53.avif' required className="imgfluid"/></a></Col>
      </Row>
    </Container>
      
      </div>
    <div><br></br>
    
    <center>
    <h3>HOT RIGHT NOW</h3><br></br>
      <img 
        src = '../images/Img47.avif' 
        style={{width:1900,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"}}
        required className="imgfluid"
      />
      </center>
      </div>
   
    <div>
    <br></br>
    <center>
    <div className="container ">
      <div className="row">
      <div className = "collection-list mt-4 row gx-0 gy-3">
      <div  className='section-tile'><h3 className="text-uppercase ls-1 text-center">DEALS YOU DON'T WANT TO MISS</h3></div>
      {/* FirstImg */}
      <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
        <div className = "collection-img position-relative text-center">
           <a href='/under699'><img src = "../images/Img54.avif" style={{width:"15rem",height:"15rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
         </div>
        
      </div>

      {/* SecondImg */}
      <div className = "col-md-6 col-lg-3 col-xl-3 p-2 best">
         <div className = "collection-img position-relative text-center">
           <a href='/under799'><img src = "../images/Img55.avif"style={{width:"15rem",height:"15rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/></a>
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
     </div><br></br>
    <h3>NEW ARRIVALS</h3><br></br>
      <img 
        src = '../images/Img48.avif' 
        style={{width:1900,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"}}
        required className="imgfluid"
      />
      </center>
      </div>
       
      <a href='/Dress'>
      <div className = "container">

      {/* Heading */}
      <div className = "collection-list mt-4 row gx-0 gy-3">
      <div  className='section-tile'><h3 className="text-uppercase fw-5 ls-1">OurProducts</h3></div>
      {/* firstrow  */}

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img7.webp" style={{width:"13rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold  text-muted">MUHURATAM 
                 Flare Yellow </p>
                <span className = "fw-bold text-regal-blue">₹ 999.00</span>
                <br></br>

                {/* <button type="button" style={{color: "white",fontWeight:"bold",backgroundColor:"#9ea4a7",width:"12rem"}} className="btn btn">Add to Cart</button> */}
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img8.webp" style={{width:"13rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted">PURVAJA      
                 Flare Multicolor Dress</p>
                <span className = "fw-bold text-regal-blue">₹ 399.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img9.webp" style={{width:"13rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted ">Janasya 
                 Flare Yellow Dress</p>
                <span className = "fw-bold text-regal-blue">₹ 841.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img10.webp" style={{width:"13rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted">SASSAFRAS 
                 White Dress</p>
                <span className = "fw-bold text-regal-blue">₹ 532.00</span>
            </div>
        </div>

      </div>
     </div>
     </a> 
     
    < a href='/cosmetics'>
     {/* Fourthrow  */}
    <div className = "container">
     <div className = "collection-list mt-4 row gx-0 gy-3">
        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img23.avif" style={{width:"15rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold  text-muted">M.A.C Eye Shadow 
                 Palette X6 - Rose Len (6.25 g)</p>
                <span className = "fw-bold text-regal-blue">₹ 600.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img24.avif" style={{width:"15rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted">Lakme Rose Face Powder
                  Warm Pink</p>
                <span className = "fw-bold text-regal-blue">₹ 500.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img25.avif" style={{width:"13rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted ">L.A Girl HD Pro Conceal 
                 Mint Corrector (8gm)</p>
                <span className = "fw-bold text-regal-blue">₹ 900.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img26.avif" style={{width:"13rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted">Coloressence HD Foundation Stick Waterproof</p>
                <span className = "fw-bold text-regal-blue">₹ 860.00</span>
            </div>
        </div>
      </div>
     </div>
     </a>
     <br></br>
     <div>
      <center>
      <img 
        src = '../images/Img44.avif' 
        style={{width:1000,height:350,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"}}
        required className="imgfluid"
      />
      </center>
    </div>

     {/* Fifthrow */}
     <a href='/Accessories'>
     <div className = "container">
     <div className = "collection-list mt-4 row gx-0 gy-3">
        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img28.webp" style={{width:"14rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold  text-muted">Sukkhi Alloy Copper Pink
                 Jewel Set</p>
               <span className = "fw-bold text-regal-blue">₹ 349.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img29.webp" style={{width:"14rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted">MANSIYAORANGE Copper Gold-plated
                 Jewel Set  </p>
                <span className = "fw-bold text-regal-blue">₹ 700.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img30.webp" style={{width:"14rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted ">YELLOW CHIMES Alloy Silver Silver 
                 Jewel Set</p>
                <span className = "fw-bold text-regal-blue">₹ 566.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img31.webp" style={{width:"14rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted">Brass Brass Silver Jewel Set</p>
                <span className = "fw-bold text-regal-blue">₹ 970.00</span>
            </div>
        </div>
      </div>
     </div>
     </a>

    
     {/* seventhrow */}
     <a href='/Flats'>
     <div className = "container">
     <div className = "collection-list mt-4 row gx-0 gy-3">
        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img36.avif" style={{width:"16rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold  text-muted">UrbanSway Pink Toe Flora
                 Flats (EURO 36)</p>
               <span className = "fw-bold text-regal-blue">₹ 950.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img37.avif" style={{width:"14rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted">Coral Haze Rose Gold Criss Cross
                 Straps Flats (EURO 38)</p>
                <span className = "fw-bold text-regal-blue">₹ 850.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img38.avif" style={{width:"14rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted ">Shoetopia Stylish Western  Golden 
                 Heels (EURO 40)</p>
                <span className = "fw-bold text-regal-blue">₹599.00</span>
            </div>
        </div>

        <div className = "col-md-6 col-lg-4 col-xl-3 p-4 best">
            <div className = "collection-img position-relative text-center"style={{width:"15rem",height:"21rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src = "../images/Img39.avif" style={{width:"14rem",height:"16rem", padding: "13px"}} />
                <span className = "position-absolute bgpink text-white d-flex align-items-center justify-content-center ">sale</span>
                <p className = "text-capitalize my-1 fw-bold text-muted">Coral Haze Gold Leatherite Strappy 
                 Flats (EURO 36)</p>
                <span className = "fw-bold text-regal-blue">₹ 700.00</span>
            </div>
        </div>
      </div>
     </div>
     </a>

      
    </div>
  )
}
