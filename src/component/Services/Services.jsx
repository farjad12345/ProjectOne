import React from 'react'
import "./Services.css";
import ServicesBox from '../ServicesBox/ServicesBox';
import {Element} from 'react-scroll';

function Services() {
  return (
    <Element name="services">

    <section className="services container">
    <p className="services-content" >خدمات</p>
    <h2>خدمات ما را بررسی کنید</h2>
    <div className="Services-Box-parent">
        
<ServicesBox/>
<ServicesBox/>
<ServicesBox/>
<ServicesBox/>
<ServicesBox/>
<ServicesBox/>
    </div>
  </section>
  </Element>

   )
}

export default Services