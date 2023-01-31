import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
const allCategories = [...items.map((item) => item.name)]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (name) => {
    const newItems = items.filter((item) => item.name === name)
    setMenuItems(newItems)
  }
  useEffect((name) => {
    const newItems = items.filter((item) => item.name === 'James')
    setMenuItems(newItems)
  }, [])
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Experience</h2>
          <div className='underline'></div>
        </div>
      </section>
      <section className='menuCol'>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
