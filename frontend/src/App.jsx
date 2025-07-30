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
class Data {

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
  const [ContentPage, setContentPage] = useState(null)


  return (<>
    <div id='Homepage'>
      <HomepageHeader
        ContentPage={ContentPage}
        begin_animation={KeyStates[0].KeyState}
        setNextAnimationState={KeyStates[1].setKeyState}
      />
      <div className='about-me'></div>
      <HomepageNavBar ContentPage={ContentPage} Body={<>
        <HomepageMainMenu ActiveMenu={ActiveMenu} Body={
          <>
            <HomepageNavItem
              title={data['homepage-navbar'][0].title}
              begin_animation={KeyStates[1].KeyState}
              setNextAnimationState={KeyStates[2].setKeyState}
              sendResponse={setActiveMenu}
              ContentPage={ContentPage}
            />
            <HomepageNavItem
              title={data['homepage-navbar'][1].title}
              begin_animation={KeyStates[2].KeyState}
              setNextAnimationState={KeyStates[3].setKeyState}
              sendResponse={setActiveMenu}
              ContentPage={ContentPage}
            />
            <HomepageNavItem
              title={data['homepage-navbar'][2].title}
              begin_animation={KeyStates[3].KeyState}
              setNextAnimationState={KeyStates[4].setKeyState}
              sendResponse={setActiveMenu}
              ContentPage={ContentPage}
            />
          </>
        } />
        <HomepageSubMenu CurrentMenu={ActiveMenu} ContentPage={ContentPage} setContentPage={setContentPage} />
      </>} />
      <HomepageFooter
        ContentPage={ContentPage}
        begin_animation={KeyStates[4].KeyState}
      />
    </div>

    <Content show={ContentPage} setCurrentPage={setContentPage} Body={
      <div style={{
        height: "100%",
        backgroundImage: "linear-gradient( #ffcc55, #ff8888 96%, #ff6f44 96% )",
      }}>
        <div style={{
          color: "white",
          fontFamily: "Candara",
          fontSize: "20px",
          fontWeight: "bold",
          width: "fit-content",
          position: "relative",
          top: "30%",
          margin: "auto",
          textAlign: "center"
        }}
        >
          <div style={{fontSize: "64px", marginBottom: "16px"}}>{"< under-construction >"}</div>
          <div>In the meantime,</div>
          <div>you can find me here:</div>
          <div style={{marginTop: "8px", display: "flex", justifyContent: "center"}}>
            <div className='footer-icon-container' style={{margin: "0 12px"}}>
              <a href='https://www.linkedin.com/in/liukevin223/' target='_blank'>
                <img className='footer-icon linkedin' src='icons/linkedin.svg' />
              </a>
            </div>
            <div className='footer-icon-container' style={{margin: "0 12px"}}>
              <a href='https://github.com/poqbox' target='_blank'>
                <img className='footer-icon github' src='icons/github.svg' />
              </a>
            </div>
          </div>
        </div>
      </div>
    } />
  </>)
}
