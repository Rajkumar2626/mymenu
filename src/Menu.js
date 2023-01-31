import React from 'react'

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, Jobtitle, desc, name } = menuItem
        return (
          <article key={id} className='menu-item'>
            <div>
              <header>
                <h4>{Jobtitle}</h4>
                <h4>{name}</h4>
              </header>
              <section>{desc}</section>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
