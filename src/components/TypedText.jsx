import { useState, useEffect, useRef } from "react"

export default function TypedText({text, style=null, base_speed=120, skip_space=false, pause_before=[","], pause_duration=800, typing_delay=0, use_text_cursor=true}) {
  // React objects
  const [FullText, setFullText] = useState(text)
  const [DisplayText, setDisplayText] = useState({text: "", intervalId: undefined})
  const [Style, setStyle] = useState(style)
  const [StyleOriginal, setStyleOriginal] = useState(style)
  const [BaseSpeed, setBaseSpeed] = useState(base_speed)
  const [PauseDuration, setPauseDuration] = useState(pause_duration)
  const [TextCursor, setTextCursor] = useState({use: use_text_cursor, intervalId: undefined, timeoutId: undefined, clearTimingEvents: function() {clearInterval(this.intervalId); clearTimeout(this.timeoutId)}, iteration: 0})
  const textP = useRef(0)
  const textCursorStyle = useRef({borderRight: "4px solid"})


  // initial useEffect
  useEffect(() => {
    // start TypedText updates
    setTimeout(() => {
      setNewInterval()
    }, typing_delay)
  }, [])

  // useEffect for text updates
  useEffect(() => {
    // TextCursor updates
    if (TextCursor.use) {

      // apply the initial TextCursor state
      if (TextCursor.intervalId) {
        setStyle(() => {
          return {...Style, ...textCursorStyle.current}
        })
      }
      TextCursor.clearTimingEvents()
      TextCursor.iteration = 0

      // start a new interval for TextCursor
      TextCursor.intervalId = setInterval(() => {
        setStyle(StyleOriginal)
        TextCursor.timeoutId = setTimeout(() => {
          setStyle(() => {
            return {...Style, ...textCursorStyle.current}
          })
        }, 550)

        // conditions for stopping TextCursor's animation
        TextCursor.iteration++
        if (TextCursor.iteration > 3) {
          TextCursor.clearTimingEvents()
          setStyle(StyleOriginal)
        }
        console.log(TextCursor.iteration)
      }, 1100)
    }
  }, [DisplayText])


  // functions for updating TypedText
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
      if (pause_before.includes(next_char)) {
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


  // return the React component
  return <pre className="TypedText" style={Style}>
    {DisplayText.text}
  </pre>
}
