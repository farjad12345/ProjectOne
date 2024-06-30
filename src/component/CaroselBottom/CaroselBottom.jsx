import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./CaroselBottom.css";
const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1, itemsFit: "contain" },
};

const items = [
  <div className="item" data-value="1">
    <img src="./images/testimonials-1.jpg"  className="image-carosel" alt="" />
    <p className="p-name">جان لارسون</p> <p>برنامه نویس</p> <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sed.</p>
  </div>,
  <div className="item" data-value="2">
    <img src="./images/testimonials-2.jpg" className="image-carosel" alt="" /> <p className="p-name"> ینا کاریس</p> <p>مدیرعامل</p > <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sed.</p>
  </div>,
  <div className="item" data-value="3">
    <img src="./images/testimonials-3.jpg" className="image-carosel" alt="" /> <p className="p-name">مت براون</p><p>گرافیست</p><p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sed.</p></div>,
  <div className="item" data-value="4">
    <img src="./images/testimonials-4.jpg" className="image-carosel" alt="" /> <p className="p-name">ساول گودمن</p><p>طراح</p><p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sed.</p></div>,
  <div className="item" data-value="5">
    <img src="./images/testimonials-5.jpg" className="image-carosel" alt="" /> <p className="p-name">سارا ویلسون</p> <p> صاحب فروشگگاه</p><p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sed.</p>
  </div>,
];

export const CaroselBottom = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    autoPlay="true"
    infinite="true"
    disableButtonsControls="true"
    animationDuration="3000"
  />
);
