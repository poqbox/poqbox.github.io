import { useState, useEffect } from 'react'
import HomepageNavItem from './HomepageNavItem'
import data from '../data/data'

export default function HomepageNavBar({begin_animation=true, setNextAnimationState=null}) {
  const [NavItems, setNavItems] = useState()

  
  useEffect(() => {
    if (begin_animation) {
      setNavItems(data['homepage-navbar'].map(nav_item =>
        <HomepageNavItem
          key={nav_item.title}
          title={nav_item.title}
        />
      ))

      if (setNextAnimationState)
        setNextAnimationState(true)
    }
  }, [begin_animation])


  return (
    <nav className='HomepageNavBar'>
      {NavItems}
    </nav>
  )
}
