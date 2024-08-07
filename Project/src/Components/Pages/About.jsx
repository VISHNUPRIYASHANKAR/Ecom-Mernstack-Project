import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Make sure to create this CSS file if you have specific styles

function About() {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1>About Us</h1>
        <img src="../images/Img65.avif" className="img-fluid" alt="About Us" />
      </div>
      <div className="aboutText mt-4 px-3 py-3" style={{ backgroundColor: 'white' }}>
        <h3>Our Brand</h3>
        <p>
          We seek to empower young women all over the country to find their confidence and embrace who they are unrequitedly. FabAlley is a bold, inclusive and fashion-forward brand aimed at arming women with fashion that is an extension of themselves. Every piece we make is an amalgamation of what our customer wants peppered with global influences such as the runways, street style, pop culture and social media – all merging together to create a one-stop-shop that delivers inimitable style for millennials.
        </p>
      </div><br></br>
      <div className="text-center">
        <img src="../images/Img90.avif" className="img-fluid" alt="About Us" />
      </div>
      <div className="aboutText mt-4 px-3 py-3" style={{ backgroundColor: 'white' }}>
        <h3>Our product</h3>
        <p>
        We specialize in combining cutting edge fashion with an affordable price tag. All our products are designed in-house by our super talented young team of designers, with our multi-tasking, millennial women customers in mind. We drop more than 100 products a week, making us not simply a fast fashion brand – but a rapid fashion brand.
Accredited with the coveted ISO 9001:2015 certification for Quality Management Systems, we promise products that meet the highest international standards of quality and processes.
Since empowerment and expression lie at the core of our design philosophy, we have something for everyone! So, whether you like to keep one step ahead of trends or perfect your signature style, we’re sure we’ve got something you’ll love. We have two major product lines, covering the gamut of occasions and needs that every Indian woman has.
        </p>
        <p>#AlleyGals
        Diversity, Relatability and Inclusiveness lie at the heart of our brand. We believe in empowering real women and inspiring a new generation of girls uninterrupted to be themselves, realize their dreams and dress however they please. Our AlleyGals are our real-world brand ambassadors who represent and inspire our customers from all walks of life.</p>
      </div><br></br>
      <div className="text-center">
        <img src="../images/Img91.avif" className="img-fluid" alt="About Us" />
      </div>
    </div>
  );
}

export default About;

