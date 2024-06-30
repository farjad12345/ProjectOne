import React from "react";
import "./EnjoyIt.css";
import EnjoyItEachBox from "../EnjoyItEachBox/EnjoyItEachBox";
function EnjoyIt() {
  return (
    <div className="enjoy-it container">
      <div className=" enjoy-it-right">
        <img src="./images/counts-img.jpg" alt="enjoy-it" />
      </div>
      <section className=" enjoy-it-left">
        <h2>شایسته ترین لذت را به هر حال ارائه می دهد</h2>
        <p className="text-content">
          خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به
          آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است
        </p>
        <div className="enjoyitBoxsParent">
          <EnjoyItEachBox />
          <EnjoyItEachBox />
          <EnjoyItEachBox />
          <EnjoyItEachBox />
        </div>
      </section>
    </div>
  );
}

export default EnjoyIt;
