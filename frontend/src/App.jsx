import { useState, useEffect } from 'react'
import './App.css'
import data from './data/data'
import useKeyStates from './util/useKeyStates'
import HomepageHeader from './components/HomepageHeader.jsx'
import HomepageNavBar from './components/HomepageNavBar.jsx'
import HomepageNavItem from './components/HomepageNavItem'
import HomepageSubMenu from './components/HomepageSubMenu'
import HomepageMainMenu from './components/HomepageMainMenu.jsx'
import HomepageFooter from './components/HomepageFooter.jsx'
import SubMenuHeader from './components/SubMenuHeader.jsx'
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
  const [StartupAnimationState, setStartupAnimationState] = useState(false)
  const [ActiveMenu, setActiveMenu] = useState(null)
  const [CurrentPage, setCurrentPage] = useState(null)
  const [ContentAlignment, setContentAlignment] = useState(null)


  // useEffect for fast-forwarding the startup animation
  useEffect(() => {
    // add event handler for fast-forwarding the startup animation
    if (!StartupAnimationState)
      window.addEventListener("dblclick", fastForwardStartupAnimation)

    // remove event handler when the animation finishes
    return () => {window.removeEventListener("dblclick", fastForwardStartupAnimation)}
  }, [StartupAnimationState])

  
  // useEffect for managing the homepage background's animation
  useEffect(() => {
    // animate the background if on the homepage
    if (!CurrentPage)
      document.body.classList.add("animate")

    // stop animating the background if CurrentPage changes
    return () => {document.body.classList.remove("animate")}
  }, [CurrentPage])


  function fastForwardStartupAnimation() {
    if (!StartupAnimationState) {
      // fast-forward the startup animation
      for (let i=0; i<KeyStates.length; i++) {
        setTimeout(() => {
          KeyStates[i].setKeyState(true)
        }, i*100)
      }
    }
  }


  return (<>
    <div id='Homepage'>
      <HomepageHeader
        CurrentPage={CurrentPage}
        obscur={ActiveMenu}
        begin_animation={KeyStates[0].KeyState}
        setNextAnimationState={KeyStates[1].setKeyState}
      />
      <HomepageSubMenu CurrentMenu={ActiveMenu} CurrentPage={CurrentPage} setCurrentPage={setCurrentPage} />
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
      </HomepageNavBar>
      <HomepageFooter
        CurrentPage={CurrentPage}
        begin_animation={KeyStates[4].KeyState}
        setNextAnimationState={setStartupAnimationState}
      />
    </div>

    <SubMenuHeader ActiveMenu={ActiveMenu} CurrentPage={CurrentPage} ContentAlignment={ContentAlignment} />
    <Content CurrentPage={CurrentPage} ContentAlignment={ContentAlignment} setContentAlignment={setContentAlignment} />
  </>)
}
