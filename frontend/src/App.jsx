import { useState } from 'react'
import './App.css'
import data from './data/data'
import useKeyStates from './util/useKeyStates'
import TypedText from './components/TypedText'
import HomepageNavItem from './components/HomepageNavItem'
import HomepageSubMenu from './components/HomepageSubMenu'
import HomepageMainMenu from './components/HomepageMainMenu.jsx'
import HomepageFooter from './components/HomepageFooter.jsx'
import Content from './components/Content.jsx'


export default function App() {
  const KeyStates = useKeyStates(5, true)
  const [ActiveMenu, setActiveMenu] = useState(null)
  const [ContentPage, setContentPage] = useState(null)


  return (<>
    <div id='Homepage'>
      <header>
        <TypedText
          text="Hi, I'm Kevin"
          style={{
            fontSize: "80px",
            fontWeight: "bold"
          }}
          typing_delay={4000}
          custom_ending_duration={3300}
          begin_animation={KeyStates[0].KeyState}
          setNextAnimationState={KeyStates[1].setKeyState}
        />
      </header>
      <div className='about-me'></div>
      <nav id='HomepageNavBar'>
        <HomepageMainMenu ActiveMenu={ActiveMenu} Body={
          <>
            <HomepageNavItem
              title={data['homepage-navbar'][0].title}
              begin_animation={KeyStates[1].KeyState}
              setNextAnimationState={KeyStates[2].setKeyState}
              sendResponse={setActiveMenu}
            />
            <HomepageNavItem
              title={data['homepage-navbar'][1].title}
              begin_animation={KeyStates[2].KeyState}
              setNextAnimationState={KeyStates[3].setKeyState}
              sendResponse={setActiveMenu}
            />
            <HomepageNavItem
              title={data['homepage-navbar'][2].title}
              begin_animation={KeyStates[3].KeyState}
              setNextAnimationState={KeyStates[4].setKeyState}
              sendResponse={setActiveMenu}
            />
          </>
        } />
        <HomepageSubMenu CurrentMenu={ActiveMenu} ContentPage={ContentPage} setContentPage={setContentPage} />
      </nav>
      <HomepageFooter
        begin_animation={KeyStates[4].KeyState}
      />
    </div>

    <Content show={ContentPage} setCurrentPage={setContentPage} Body={
      <div>Hi</div>
    } />
  </>)
}
