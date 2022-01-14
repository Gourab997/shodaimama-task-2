import React from "react";
import bbq from "../../../image/bbq.jpeg";
import top from "../../../image/KI4pOd1640530128412y5em01.jpeg";

const TopBanner = () => {
  return (
    <div className='top-banner'>
      <div>
        <img src={top} className='banner-image' alt='' />
      </div>
      <div className='preorder'>
        <div className='line-new'></div>

        <div className='preorders'>
          <h3>Preorder</h3>
          <p>
            বাজার দরের চেয়ে কম মূল্যে মৌসুমি পণ্য, ঐতিহ্যবাহী খাবার এবং মাসের
            বাজার সরবরাহ করা হয় ২-৭ দিনে ।
          </p>
        </div>
      </div>
      <div className='card'>
        <div className='card-image'>
          <img src={bbq} alt='' />
        </div>

        <p className='card-text'>সদাইমামা বার-বি-কিউ ফেস্ট</p>
      </div>
      <div className='preorder'>
        <div className='line-new'></div>

        <div className='preorders'>
          <h3>Regular</h3>
          <p>
            ২ ঘন্টার মধ্যে জরুরি প্রয়োজনীয় পণ্যসমূহ সরবরাহ করা হয় সকাল ১০টা-রাত
            ১০টা পর্যন্ত ।
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
