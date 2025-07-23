import { useState, useEffect } from "react"


export default function HomepageFooter({begin_animation=true, setNextAnimationState=null}) {
  // hide the components until the animation begins
  const [Style1, setStyle1] = useState({opacity: 0})
  const [Style2, setStyle2] = useState({opacity: 0})
  const [Style3, setStyle3] = useState({opacity: 0})


  // initial useEffect
  useEffect(() => {
    if (begin_animation) {
      // unhide the components
      setTimeout(() => { setStyle1(null) }, 0)
      setTimeout(() => { setStyle2(null) }, 60)
      setTimeout(() => { setStyle3(null) }, 120)
    }
  }, [begin_animation])

  
  // return the React component
  return (
    <footer id='HomepageFooter'>
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
    </footer>
  )
}
