import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarousalBoot.css'



export default function BootstrapCarousal() {
  return (
    <div>
       <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                       src="../images/Img46.avif" 
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="../images/Img49.avif"  
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="../images/Img45.avif"  
                        alt="fourth slide"
                    />

                  
                </Carousel.Item>
                
              
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="../images/Img50.avif" 
                        alt="fourth slide"
                    />

                  
                </Carousel.Item>
                
            </Carousel>
    </div>
  )
}
