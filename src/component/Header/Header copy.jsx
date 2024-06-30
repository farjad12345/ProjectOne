import React from "react";
import "./Header.css";
import { Element, Link, animateScroll as Scroll } from "react-scroll";
import { useState } from "react";
function Header() {
  const [togleMeneshow,settogleMeneshow]=useState(fa)
  const [toglegMeneHide,settoglegMeneHide]=useState(false)
  const handeleToggleIconMene=()=>{
    console.log(settogleMeneshow);

settogleMeneshow((prevState) => !prevState);
// settoglegMeneHide((prev)=> !prev);
console.log(settogleMeneshow);
  }
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
                </Link>
              </li>
              <li>
                <Link to="team" smooth={true} duration={500}>
                  تیم ما
                </Link>{" "}
              </li>

              <li>
                <Link to="contact-us" smooth={true} duration={500}>
                  تماس با ما
                </Link>{" "}
              </li>
            </ul>
            <a className="start" href="">
              شروع
            </a>
            <div className="Hamburger-menu" >
              <div className="parent-hamburger-icon"  onClick={()=>togleMeneshow(prevstate => !prevstate)}>
                <i class="fas fa-bars" style={togleMeneshow? { display:'block'}:{ display:'none'}}></i>
              </div>
              <div className="parent-humberger-icon-close"  onClick={handeleToggleIconMene}>
                <i class="fas fa-times"></i>
              </div>{" "}
              <ul className="ul-hamburger">
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
                  </Link>{" "}
                </li>

                <li>
                  <Link to="contact-us" smooth={true} duration={500}>
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Element>
  );
}

export default Header;
