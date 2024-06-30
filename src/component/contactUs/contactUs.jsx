import React from "react";
import "./contactUs.css";
import {Element} from 'react-scroll';

import OurTeamEachMember from "../OurTeamEachMember/OurTeamEachMember";
function ContactUs() {
  return (
    <>
        <Element name="contact-us">

      <section className="contact-us ">
        <div>
          <p className="contact-us-content">تماس با ما</p>
          <h2>با ما تماس بگیرید</h2>
        </div>
        <div className="contact-us-map-box ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6668104.874660536!2d47.51560453160705!3d35.30820320982707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sAzadi%20Tower!5e0!3m2!1sen!2s!4v1717840120894!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
<div className="form-and-address-parent ">
        <div className="list-address-parent ">
          <div className="list-address first ">
            <div className="icon-parent">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3 className="top-text">مکان:</h3>
              <p className="bottom-text">تهران خیابان آزادی</p>
            </div>
          </div>
          <div className="list-address ">
            <div className="icon-parent">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3 className="top-text">ایمیل:</h3>
              <p className="bottom-text">info@example.com</p>
            </div>
          </div>
          <div className="list-address last ">
            <div className="icon-parent">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3 className="top-text">شماره تماس:</h3>
              <p className="bottom-text">0123467889</p>
            </div>
          </div>
        </div>
        <form action="/action_page.php" className="fourm-parent">
          <input type="text" className="fname" placeholder="نام" />
          <input type="email" className="email" placeholder="ایمیل" />
          <input type="text" className="subject" placeholder="عنوان" />

          <textarea placeholder=" پیام"  rows="4"   />
          <button type="submit" className="submit"  >  ارسال پیام</button>
        </form>
      </div>
</Element>
    </>
  );
}

export default ContactUs;
