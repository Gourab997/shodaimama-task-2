import React from "react";
import bbq from "../../../image/bbq.jpeg";
import top from "../../../image/KI4pOd1640530128412y5em01.jpeg";

const TopBanner = () => {
  return (
    <div>
      <div>
        <img src={top} class='banner-image' alt='' />
      </div>
      <div class='preorder'>
        <div class='line-new'></div>

        <div class='preorders'>
          <h3>Preorder</h3>
          <p>
            বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের
            বাজার সরবরাহ করা হয় ২-৭ দিনে ।
          </p>
        </div>
      </div>
      <div class='card'>
        <div class='card-image'>
          <img src={bbq} alt='' />
        </div>

        <p class='card-text'>সদাইমামা বার-বি-কিউ ফেস্ট</p>
      </div>
    </div>
  );
};

export default TopBanner;
