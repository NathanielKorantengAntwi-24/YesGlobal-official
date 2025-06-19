import React from 'react';


const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, duration } = menuItem;
        return (
          <article key={id} className='menu-item container'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h6>{title}</h6>
                &nbsp;
                <h4 className='duration'>{duration}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
