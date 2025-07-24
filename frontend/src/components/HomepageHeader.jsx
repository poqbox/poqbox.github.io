import TypedText from "./TypedText"


export default function HomepageHeader({begin_animation=true, setNextAnimationState=null}) {
  return (
    <header id="HomepageHeader">
      <TypedText
        text="Hi, I'm Kevin"
        typing_delay={4000}
        custom_ending_duration={3300}
        begin_animation={begin_animation}
        setNextAnimationState={setNextAnimationState}
      />
    </header>
  )
}