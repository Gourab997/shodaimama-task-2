import React from "react";
import Grocery from "../../../image/item/categories/why/download.png";
import Freshness from "../../../image/item/categories/why/freshness-refined.b739103f.png";
import Delivery from "../../../image/item/categories/why//on-time-door-step-delevary.bbe0d749.png";
import flawless from "../../../image/item/categories/why/fast-and-flawless-payment.e84934c7.png";
import customer from "../../../image/item/categories/why/downloads.png";
import money from "../../../image/item/categories/why/value-for-money.a1ed3a72.png";
import uncompromised from "../../../image/item/categories/why/uncompromised-dedicated-service.f13021df.png";
import Refund from "../../../image/item/categories/why/stress-free-refund.b1606821.png";

const Why = () => {
  return (
    <div className='top-banner'>
      <div className='subheading'>
        <p className='subheading-text'>Why Shadai Mama</p>
      </div>
      <div className='why'>
        <div className='product-card-why'>
          <div className='category-area'>
            <img src={Grocery} alt='' />
          </div>

          <h5 className='product-text'>Hassle Free Grocery Shopping</h5>
          <p>Avoid the crowds and long queues to get your daily needs.</p>
        </div>
        <div className='product-card-why'>
          <div className='category-area'>
            <img src={Freshness} alt='' />
          </div>

          <h5 className='product-text'>Freshness Redefined</h5>
          <p>
            Fresh groceries from trusted and hygienic sources to your doorstep.
          </p>
        </div>
        <div className='product-card-why'>
          <div className='category-area'>
            <img src={Delivery} alt='' />
          </div>

          <h5 className='product-text'>On-Time Doorstep Delivery</h5>
          <p>Solution to your needs just on time.</p>
        </div>
        <div className='product-card-why'>
          <div className='category-area'>
            <img src={flawless} alt='' />
          </div>

          <h5 className='product-text'>Fast & Flawless Payment System</h5>
          <p>
            All secured payment gateways to ensure stress free fast payment.
          </p>
        </div>
        <div className='product-card-why'>
          <div className='category-area'>
            <img src={customer} alt='' />
          </div>

          <h5 className='product-text'>Customer Centric Approach</h5>
          <p>
            For us, our customer needs comes first. Our Aim is to offer the very
            Best quality, at the best price and deals.
          </p>
        </div>
        <div className='product-card-why'>
          <div className='category-area'>
            <img src={money} alt='' />
          </div>

          <h5 className='product-text'>Value For Money</h5>
          <p>
            Commited to ensure that your hard-earned money are spent wisely..
          </p>
        </div>
        <div className='product-card-why'>
          <div className='category-area'>
            <img src={uncompromised} alt='' />
          </div>

          <h5 className='product-text'>Prompt Query Resolve</h5>
          <p>
            Not just answering your calls, rather a substantial solution to all
            your queries.
          </p>
        </div>
        <div className='product-card-why'>
          <div className='category-area'>
            <img src={Refund} alt='' />
          </div>

          <h5 className='product-text'>Stress Free Refund/Return Policy</h5>
          <p>
            With proper validation your return and refund will be as smooth as
            your shopping experience with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
