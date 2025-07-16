import { useState } from 'react'
import './App.css'
import data from './data/data'
import HomepageNavItem from './components/HomepageNavItem'
import TypedText from './components/TypedText'

export default function App() {
  const NavItems = data['homepage-navbar'].map(nav_item =>
    <HomepageNavItem
      key={nav_item.title}
      title={nav_item.title}
    />
  )

  return (
    <div id='homepage'>
      <header>
        <TypedText
          text="Hi, I'm Kevin"
          style={{
            fontSize: "80px",
            fontWeight: "bold"
          }}
          typing_delay={4000}
        />
      </header>
      <div className='about-me'></div>
      <nav>
        {NavItems}
      </nav>
    </div>
  )
}
