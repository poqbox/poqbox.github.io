import { useEffect, useRef } from "react"
import TypedText from "./TypedText"


export default function HomepageHeader({CurrentPage=null, obscur=false, begin_animation=true, setNextAnimationState=null}) {
  const headerRef = useRef(null)


  // useEffect for obscuring the component
  useEffect(() => {
    if (obscur)
      headerRef.current.classList.add("obscur")
    else
      headerRef.current.classList.remove("obscur")
  }, [obscur])

  // useEffect for the component's hiding animation
  useEffect(() => {
    if (CurrentPage)
      headerRef.current.classList.add("hidden")
    else
      headerRef.current.classList.remove("hidden")
  }, [CurrentPage])


  // return the React component
  return (
    <header id="HomepageHeader" ref={headerRef}>
      <TypedText
        className="title"
        text="Hi, I'm Kevin"
        typing_delay={4000}
        ending_duration={3300}
        begin_animation={begin_animation}
        setNextAnimationState={setNextAnimationState}
      />
    </header>
  )
}