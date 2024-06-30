import React from "react";
import "./Features.css";
import FeaturesBoxContent from "../FeaturesBoxContent/FeaturesBoxContent";
function Features() {
  return (
    <div className="features container">
      <div className="features-half features-right">
        <img src="./images/features.jpg" alt="features" />
      </div>
      <div className="features-half features-left">
   
{/* <div > */}
    <FeaturesBoxContent/>  
    <FeaturesBoxContent/>  
    <FeaturesBoxContent/>  
    <FeaturesBoxContent/>  
 
{/* </div> */}
      </div>
    </div>
  );
}

export default Features;
