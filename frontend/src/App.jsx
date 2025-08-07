import { useState } from 'react'
import './App.css'
import data from './data/data'
import useKeyStates from './util/useKeyStates'
import HomepageHeader from './components/HomepageHeader.jsx'
import HomepageNavBar from './components/HomepageNavBar.jsx'
import HomepageNavItem from './components/HomepageNavItem'
import HomepageSubMenu from './components/HomepageSubMenu'
import HomepageMainMenu from './components/HomepageMainMenu.jsx'
import HomepageFooter from './components/HomepageFooter.jsx'
import Content from './components/Content.jsx'


// functions for fetching data from backend
const BASE_URL = import.meta.env.VITE_BASE_URL  // backend URL
class DB {

  static async fetchProjects() {
    try {
      const response = await fetch(BASE_URL + "/projects")
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

}


export default function App() {
  const KeyStates = useKeyStates(5, true)
  const [ActiveMenu, setActiveMenu] = useState(null)
  const [CurrentPage, setCurrentPage] = useState(null)


  return (<>
    <div id='Homepage'>
      <HomepageHeader
        CurrentPage={CurrentPage}
        begin_animation={KeyStates[0].KeyState}
        setNextAnimationState={KeyStates[1].setKeyState}
      />
      <div className='about-me'></div>
      <HomepageNavBar CurrentPage={CurrentPage}>
        <HomepageMainMenu ActiveMenu={ActiveMenu}>
          <HomepageNavItem
            title={data['homepage-navbar'][0].title}
            begin_animation={KeyStates[1].KeyState}
            setNextAnimationState={KeyStates[2].setKeyState}
            sendResponse={setActiveMenu}
            CurrentPage={CurrentPage}
          />
          <HomepageNavItem
            title={data['homepage-navbar'][1].title}
            begin_animation={KeyStates[2].KeyState}
            setNextAnimationState={KeyStates[3].setKeyState}
            sendResponse={setActiveMenu}
            CurrentPage={CurrentPage}
          />
          <HomepageNavItem
            title={data['homepage-navbar'][2].title}
            begin_animation={KeyStates[3].KeyState}
            setNextAnimationState={KeyStates[4].setKeyState}
            sendResponse={setActiveMenu}
            CurrentPage={CurrentPage}
          />
        </HomepageMainMenu>
        <div id='submenu-container'>
          <HomepageSubMenu CurrentMenu={ActiveMenu} CurrentPage={CurrentPage} setCurrentPage={setCurrentPage} />
        </div>
      </HomepageNavBar>
      <HomepageFooter
        CurrentPage={CurrentPage}
        begin_animation={KeyStates[4].KeyState}
      />
    </div>

    <Content CurrentPage={CurrentPage} />
  </>)
}
