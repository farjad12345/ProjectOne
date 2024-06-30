import React from "react";
import "./Header.css";
import { Element, Link, animateScroll as Scroll } from "react-scroll";

function Header() {
  return (
    <Element name="home">
      <header className="header">
        <div className="container">
          <nav className="nav">
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
                </Link>{" "}
              </li>
              <li>
              <Link to="team" smooth={true} duration={500}>
                  تیم ما
                </Link>              </li>
              {/* <li>
                <a href="http://">لیست</a>
              </li> */}
              <li>
              <Link to="contact-us" smooth={true} duration={500}>
                  تماس با ما
                </Link>               </li>
            </ul>
            <a className="start" href="">
              شروع
            </a>
          </nav>
        </div>
      </header>
    </Element>
  );
}

export default Header;
