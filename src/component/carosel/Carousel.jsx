import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items:1 },
    568: { items: 2 },
    1024: { items: 6,
        itemsFit: 'contain',
     },
};

const items = [
    <div className="item" data-value="1"><img src="./images/client-1.png" alt="" /></div>,
    <div className="item" data-value="2"><img src="./images/client-2.png" alt="" /></div>,
    <div className="item" data-value="3"><img src="./images/client-3.png" alt="" /></div>,
    <div className="item" data-value="4"><img src="./images/client-4.png" alt="" /></div>,
    <div className="item" data-value="5"><img src="./images/client-5.png" alt="" /></div>,
    <div className="item" data-value="6"><img src="./images/client-6.png" alt="" /></div>,
    <div className="item" data-value="7"><img src="./images/client-7.png" alt="" /></div>,
    <div className="item" data-value="8"><img src="./images/client-8.png" alt="" /></div>,

];

 export const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay="true"
        infinite="true"
        disableButtonsControls="true"
        animationDuration="1000"

             />
);