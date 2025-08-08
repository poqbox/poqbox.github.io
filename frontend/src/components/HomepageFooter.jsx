import { useState, useEffect } from "react"
import TypedText from "./TypedText"


export default function HomepageFooter({CurrentPage=null, begin_animation=true, setNextAnimationState=null}) {
  // hide the components until the animation begins
  const [Style1, setStyle1] = useState({opacity: 0})
  const [Style2, setStyle2] = useState({opacity: 0})
  const [Style3, setStyle3] = useState({opacity: 0})
  const [showTechStack, setShowTechStack] = useState(false)
  const [ClassNames, setClassNames] = useState(null)


  // initial useEffect
  useEffect(() => {
    if (begin_animation) {
      // unhide the components
      setTimeout(() => { setStyle1(null) }, 0)
      setTimeout(() => { setStyle2(null) }, 60)
      setTimeout(() => { setStyle3(null) }, 120)
      setTimeout(() => {
        setShowTechStack(true)
        if (setNextAnimationState) {
          setNextAnimationState(true)
        }
      }, 2400)
    }
  }, [begin_animation])


  // useEffect for the component's transition animation
  useEffect(() => {
    if (CurrentPage)
      setClassNames("sidebar")
    else
      setClassNames(null)
  }, [CurrentPage])

  
  // return the React component
  return (
    <footer id='HomepageFooter' className={ClassNames}>
      <div className='footer-links'>
        <div className='footer-icon-container' style={Style1}>
          <a href='/'>
            <img className='footer-icon homepage' src='icons/homepage.svg' />
          </a>
        </div>
        <div className='footer-icon-container' style={Style2}>
          <a href='https://www.linkedin.com/in/liukevin223/' target='_blank'>
            <img className='footer-icon linkedin' src='icons/linkedin.svg' />
          </a>
        </div>
        <div className='footer-icon-container' style={Style3}>
          <a href='https://github.com/poqbox' target='_blank'>
            <img className='footer-icon github' src='icons/github.svg' />
          </a>
        </div>
      </div>
      <TypedText
        className="made-with"
        text="Made with React.js"
        use_text_cursor={false}
        begin_animation={showTechStack}
      />
    </footer>
  )
}
