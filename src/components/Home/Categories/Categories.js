import React from "react";
import snacks from "../../../image/item/categories/smcat_1624898877195_13897913_pzqI9rNe_SASSMIS.png";
import cooking from "../../../image/item/categories/cooking.png";
import meat from "../../../image/item/categories/meat.png";
import vage from "../../../image/item/categories/veg.png";
import daily from "../../../image/item/categories/Daily.png";
import frozen from "../../../image/item/categories/frozen.png";
import Beverage from "../../../image/item/categories/Beverage.png";
import kids from "../../../image/item/categories/kids.png";
import personal from "../../../image/item/categories/personal.png";
import homes from "../../../image/item/categories/homes.png";
import stationary from "../../../image/item/categories/stationary.png";
const Categories = () => {
  return (
    <div className='top-banner'>
      <div className='subheading'>
        <p className='subheading-text'>Shodaimama Categories</p>
      </div>

      <div className='categories'>
        <div className='product-card'>
          <div className='category-area'>
            <img src={snacks} alt='' />
          </div>

          <p className='product-text'>Breakfast & Snacks</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={cooking} alt='' />
          </div>

          <p className='product-text'>Cooking</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={meat} alt='' />
          </div>

          <p className='product-text'>Meat & Fish</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={vage} alt='' />
          </div>

          <p className='product-text'>Fruits & Vegetables</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={daily} alt='' />
          </div>

          <p className='product-text'>Daily</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={frozen} alt='' />
          </div>

          <p className='product-text'>Frozen & Canned</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={Beverage} alt='' />
          </div>

          <p className='product-text'>Beverage</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={kids} alt='' />
          </div>

          <p className='product-text'>Kids care</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={personal} alt='' />
          </div>

          <p className='product-text'>Personal Care</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={homes} alt='' />
          </div>

          <p className='product-text'>Home & Kitchen</p>
        </div>
        <div className='product-card'>
          <div className='category-area'>
            <img src={stationary} alt='' />
          </div>

          <p className='product-text'>Stationary</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
