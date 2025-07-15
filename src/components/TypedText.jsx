import { useState, useEffect, useRef } from "react"

export default function TypedText({text, style=null, base_speed=120, skip_space=false, puase_before=[","], pause_duration=800}) {
  const [FullText, setFullText] = useState(text)
  const [DisplayText, setDisplayText] = useState({text: "", intervalId: undefined})
  const [BaseSpeed, setBaseSpeed] = useState(base_speed)
  const [PauseDuration, setPauseDuration] = useState(pause_duration)
  const textP = useRef(0)

  useEffect(() => {
    setNewInterval()
  }, [])

  function setNewInterval() {
    DisplayText.intervalId = setInterval(() => {
      (textP.current !== FullText.length)
        ? updateTypedText()
        : clearInterval(DisplayText.intervalId)
    }, BaseSpeed)
  }

  function updateTypedText() {
    setDisplayText((DisplayText) => {
      let new_chars = ""

      // space timings
      if (skip_space) {
        while (FullText[textP.current] === " ")
          new_chars += FullText[textP.current++]
      }

      let next_char = FullText[textP.current]

      // extra timings
      if (puase_before.includes(next_char)) {
        pauseBeforeUpdateTypedText()
        clearInterval(DisplayText.intervalId)
        return DisplayText
      }

      new_chars += FullText[textP.current++]

      return {
        ...DisplayText,
        text: DisplayText.text + new_chars
      }
    })

    if (textP.current === FullText.length)
      clearInterval(DisplayText.intervalId)
  }

  function pauseBeforeUpdateTypedText() {
    setTimeout(() => {
      setDisplayText((DisplayText) => {
        return {
          ...DisplayText,
          text: DisplayText.text + FullText[textP.current++]
        }
      })
      setNewInterval()
    }, PauseDuration)
  }

  return <div style={style}>
    {DisplayText.text}
  </div>
}
