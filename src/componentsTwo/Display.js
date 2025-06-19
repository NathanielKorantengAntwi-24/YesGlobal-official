import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './info.css'
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Display() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    
      <main className="" style={{background: "var(--clr-grey-10)",width:"100%"}}>
      <section className="menu section container  bg-light">
        <div className="title">
          <h2>Programmes</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Display;
