import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import'./Foot.css';
export default function BootstrapFooter() {
  return (
    
    <div>
    <div className='bg-dark'>
      <div className='container'>
      <div className='row py-5 text-white'>


       {/* FirstSection */}
      <div className='col-md-6 col-lg-3 col-sm-12'>
        <h4 className="text-white">Dhiya Fashion</h4>
        <p className='text-white text-muted mt-3'>Another reason why Dhiya is the best of all online stores is the complete convenience that it offers.
           You can view your favourite brands with price options for different products in one place.</p>
      </div>


       {/* SecondSection */}
    <div className='col-md-6 col-lg-3 col-sm-10'>
        <h4 className="text-white">Links</h4>
        <ul className = "list-unstyled">
          <li className = "my-3">
             <a href = "/Home" className = "text-white text-decoration-none text-muted">
               <i className = "fas fa-chevron-right me-1"></i> Home
             </a>
          </li>
         <li className = "my-3">
            <a href = "#" className = "text-white text-decoration-none text-muted">
              <i className = "fas fa-chevron-right me-1"></i> Collection
           </a>
          </li>
        <li className = "my-3">
             <a href = "#" className = "text-white text-decoration-none text-muted">
               <i className = "fas fa-chevron-right me-1"></i> Blogs
             </a>
        </li>
         <li className = "my-3">
              <a href = "/About" className = "text-white text-decoration-none text-muted">
                 <i className = "fas fa-chevron-right me-1"></i> About Us
              </a>          
          </li>
        </ul>
     </div>
      

      {/* ThirdSection */}
      <div className='col-md-6 col-lg-3 col-sm-12'>
        <h4 className="text-white">Address</h4>
        <div className='text-white text-muted mt-3'>
        <p><i class="fas fa-map-marked-alt me-2"></i>Sangeeth Nagar 5thStreet,Koodal Nagar,Madurai-18</p>
        <p><i class="fas fa-envelope me-2"></i>dhiya.support@gmail.com</p>
        <p><i class="fas fa-phone-alt me-2"></i>+9786 6776 236</p>
     </div>
     </div>

     {/* FourthSection */}
      <div className='col-md-6 col-lg-3 col-sm-12'>
        <h4 className="text-white">Follow Us</h4>
        <div className='footer-icons text-muted mt-3'>
        <ul className = "list-unstyled d-flex">
          <li>
            <a href = "#" className = "text-decoration-none text-muted fs-4 me-4">
              <i className="fa-brands fa-facebook-f"></i>
             </a>
         </li>
          <li>
            <a href = "#" className = "text-decoration-none text-muted fs-4 me-4">
              <i className="fa-brands fa-twitter"></i>
            </a>
         </li>
         <li>
           <a href = "#" className = "text-decoration-none text-muted fs-4 me-4">
                <i className="fa-brands fa-instagram"></i>
           </a>
         </li>
             <li>
              <a href = "#" className = "text-decoration-none text-muted fs-4 me-4">
                 <i className="fa-brands fa-pinterest"></i>
              </a>
             </li>
         </ul>
        </div>
       </div>     
      </div>
       </div>
       </div>
   </div>
  )
}
