import React from "react";
import "./Header.css";
import { Element, Link, animateScroll as Scroll } from "react-scroll";
import { useState } from "react";
function Header() {
  const [isShowModal ,setIsShowModal]=useState(true)

  return (
           <Element name="home">
    <header className="header">
          <nav className="nav container">
            <div className="heder-icon">
              <a className="logo-text" href="#">
                Kasuka
                <img src="./images/logo.png" alt="" />
              </a>
            </div>

            <ul className="ul">
              <li>
                <Link to="home" smooth={true} duration={500}>
                  خانه
                </Link>
              </li>
              <li>
                <Link to="About" smooth={true} duration={500}>
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500}>
                  خدمات
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500}>
                  نمونه کارها
                </Link>
              </li>
              <li>
                <Link to="team" smooth={true} duration={500}>
                  تیم ما
                </Link>
              </li>

              <li>
                <Link to="contact-us" smooth={true} duration={500}>
                  تماس با ما
                </Link>
              </li>
            </ul>
            <a className="start" href="">
              شروع
            </a>
            <div className="Hamburger-menu" >
            <ul className="ul-hamburger"  style={isShowModal?{ display:'none'}:  { display:'block'}}>
                <li>
                  <Link to="home" smooth={true} duration={500}>
                    خانه
                  </Link>
                </li>
                <li>
                  <Link to="About" smooth={true} duration={500}>
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link to="services" smooth={true} duration={500}>
                    خدمات
                  </Link>
                </li>
                <li>
                  <Link to="portfolio" smooth={true} duration={500}>
                    نمونه کارها
                  </Link>
                </li>
                <li>
                  <Link to="team" smooth={true} duration={500}>
                    تیم ما
                  </Link>
                </li>

                <li>
                  <Link to="contact-us" smooth={true} duration={500}>
                    تماس با ما
                  </Link>
                </li>
              </ul>
              <div className="parent-hamburger-icon"  onClick={()=>setIsShowModal(prevstate => !prevstate)}>
               {isShowModal ? <i class="fas fa-bars"></i>:

                <i class="fas fa-times" ></i>}
              </div>

            </div>
          </nav>
      </header>
    </Element>
  );
}

export default Header;
