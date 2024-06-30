import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer>
    <div className="footer-top">
      <div className="column-one">
        <div className="col-one-logo">
          <div className="logo-footer-parent">
            <img src="./images/logo.png" alt="" />
          </div>
          <p className="logo-text-footer">KASUKA</p>
        </div>
        <p className="text">تهران خیابان آزادی</p>
        <p className="text">تلفن: 01234567895</p>
        <p className="text">ایمیل: info@example.com</p>
      </div>
      <div className='center-row'>

      <div className="column-two">
        <h4>لینک های مفید</h4>
        <ul className="colum-two-links">
          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href=""> خانه</a>
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href="">درباره ی ما</a>
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href="">خدمات</a>
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href="">شرایط استفاده از خدمات</a>
          </li>

          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href="">سیاست حفظ حریم خصوصی</a>
          </li>
        </ul>
      </div>
      <div className="column-two">
        <h4>خدمات ما</h4>
        <ul className="colum-two-links">
          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href="">طراحی وب سایت</a>
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href="">وسعه وب</a>
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href="">مدیریت تولید</a>
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href="">بازاریابی</a>
          </li>

          <li>
            <i class="fa-sharp fa-solid fa-arrow-left-long"></i>{" "}
            <a href="">طراحی گرافیک</a>
          </li>
        </ul>
      </div>
      </div>

      <div className="column-four">
        <h4>خبرنامه ما</h4>
        <p>
          با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
          بود
        </p>
        <div>
        <form action="" method="post">
          <input type="email" name="email"/>
          <input type="submit" value="دنبال کردن" />
        </form>
          
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>طراحی شده توسط  <span className="my-name">FARJAD</span> کلیه  حقوق محفوظ است</p> 
    </div>
  </footer>
  )
}

export default Footer
