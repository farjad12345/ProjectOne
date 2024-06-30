import React from "react";
import "./Portfolio.css";
import {  Routes, Route, Link } from "react-router-dom";
import {Element} from 'react-scroll';

import One from "../../Pages/One/One";
import Two from "../../Pages/Two/Two";
import Three from "../../Pages/Three/Three";
import Four from "../../Pages/Four/Four";
function Portfolio() {
  return (
    <>
        <Element name="portfolio">

      <section className="portfolio container">
        <div className=" portfolio-top">
          <p className="portfolio-content">نمونه کارها</p>
          <h2>نمونه کارها ما را بررسی کنید</h2>
        </div>
        <nav className="portofilo-menu">
          <ul>
            <li>
              <Link to="/">همه</Link>
            </li>
            <li>
              <Link to="two">برنامه</Link>
            </li>
            <li>
              <Link to="three"> محصول</Link>
            </li>
            <li>
              <Link to="four"> اینترنت</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="/four" element={<Four />} />
        </Routes>
      </section>
      </Element>

    </>
  );
}

export default Portfolio;
