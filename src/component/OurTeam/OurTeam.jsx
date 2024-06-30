import React from 'react';
import "./OurTeam.css";
import {Element} from 'react-scroll';

import OurTeamEachMember from '../OurTeamEachMember/OurTeamEachMember';
function OurTeam() {
  return (
    <Element name="team">

    <section className="OurTeam container">
      <div className='OurTeam-top'>
        <p className="OurTeam-content">تیم</p>
        <h2>تیم ما را بررسی کنید</h2>
      </div>
      <div className="OurTeam-Box-parent">
   <OurTeamEachMember/>
   <OurTeamEachMember/>
   <OurTeamEachMember/>
   <OurTeamEachMember/>
      </div>
    </section> 
    </Element>
 )
};

export default OurTeam