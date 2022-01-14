import React from "react";

const Sidebar = () => {
  return (
    <div className='sidenav'>
      <div className='top-side'>
        <a href='#'>
          <span className='sidebar-menu'>
            <div className='sidebar-imgs'>
              <img
                className='sidebar-img'
                src='./image/item/categories/home.png'
                alt=''
              />
            </div>

            <h6>Home</h6>
          </span>
        </a>
        <a href='#'>
          <span className='sidebar-menu'>
            <div className='sidebar-imgs'>
              <img
                className='sidebar-img'
                src='./image/item/categories/fresh.c490817a.png'
                alt=''
              />
            </div>

            <h6>Fresh</h6>
          </span>
        </a>
        <a href='#'>
          <span className='sidebar-menu'>
            <div className='sidebar-imgs'>
              <img
                className='sidebar-img'
                src='./image/item/categories/regular.13e10ad7.png'
                alt=''
              />
            </div>

            <h6>Regular</h6>
          </span>
        </a>
        <a href='#'>
          <span className='sidebar-menu'>
            <div className='sidebar-imgs'>
              <img
                className='sidebar-img'
                src='./'
                alt=''
              />
            </div>

            <h6>Preorder</h6>
          </span>
        </a>
      </div>

      <div className='explore'>
        <h5 className='product-text' style={{ color: "gray" }}>
          Explore <span style={{ color: "green" }}>Shodai</span>
          <span style={{ color: "orange" }}>Mama</span>
        </h5>
      </div>
      <div className='top-side'>
        <a href='#'>
          <span className='sidebar-menu'>
            <div className='sidebar-imgs'>
              <img
                className='sidebar-img'
                src='./image/item/categories/home.png'
                alt=''
              />
            </div>

            <h6>Home</h6>
          </span>
        </a>
        <a href='#'>
          <span className='sidebar-menu'>
            <div className='sidebar-imgs'>
              <img
                className='sidebar-img'
                src='./image/item/categories/fresh.c490817a.png'
                alt=''
              />
            </div>

            <h6>Fresh</h6>
          </span>
        </a>
        <a href='#'>
          <span className='sidebar-menu'>
            <div className='sidebar-imgs'>
              <img
                className='sidebar-img'
                src='./image/item/categories/regular.13e10ad7.png'
                alt=''
              />
            </div>

            <h6>Regular</h6>
          </span>
        </a>
        <a href='#'>
          <span className='sidebar-menu'>
            <div className='sidebar-imgs'>
              <img
                className='sidebar-img'
                src='./image/item/categories/preorders2.866c3fa6.png'
                alt=''
              />
            </div>

            <h6>Preorder</h6>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
