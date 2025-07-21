import { useState } from 'react'
import './App.css'
import data from './data/data'
import useKeyStates from './util/useKeyStates'
import TypedText from './components/TypedText'
import HomepageNavItem from './components/HomepageNavItem'

export default function App() {
  const KeyStates = useKeyStates(5, true)

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
          custom_ending_duration={3300}
          begin_animation={KeyStates[0].KeyState}
          setNextAnimationState={KeyStates[1].setKeyState}
        />
      </header>
      <div className='about-me'></div>
      <nav className='navbar'>
        <HomepageNavItem
          title={data['homepage-navbar'][0].title}
          begin_animation={KeyStates[1].KeyState}
          setNextAnimationState={KeyStates[2].setKeyState}
        />
        <HomepageNavItem
          title={data['homepage-navbar'][1].title}
          begin_animation={KeyStates[2].KeyState}
          setNextAnimationState={KeyStates[3].setKeyState}
        />
        <HomepageNavItem
          title={data['homepage-navbar'][2].title}
          begin_animation={KeyStates[3].KeyState}
          setNextAnimationState={KeyStates[4].setKeyState}
        />
      </nav>
    </div>
  )
}
