import HomepageNavItem from './HomepageNavItem'
import data from '../data/data'

export default function HomepageNavBar() {
  const NavItems = data['homepage-navbar'].map(nav_item =>
    <HomepageNavItem
      key={nav_item.title}
      title={nav_item.title}
    />
  )


  return (
    <nav className='HomepageNavBar'>
      {NavItems}
    </nav>
  )
}
