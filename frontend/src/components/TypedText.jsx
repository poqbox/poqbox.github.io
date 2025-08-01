import { useState, useEffect, useRef } from "react"


export default function TypedText({text, className=null, style=null, base_speed=120, skip_space=false, pause_before=[","], pause_duration=800, typing_delay=0, use_text_cursor=true, max_text_cursor_blinks=3, ending_duration=-1, begin_animation=true, setNextAnimationState=null}) {
  // React objects
  const [FullText, setFullText] = useState(text)
  const [DisplayText, setDisplayText] = useState({text: "", intervalId: undefined})
  const [ClassNames, setClassNames] = useState(`TypedText ${className}`.trim())
  const [Style, setStyle] = useState(style)
  const [StyleOriginal, setStyleOriginal] = useState(style)
  const [BaseSpeed, setBaseSpeed] = useState(base_speed)
  const [PauseDuration, setPauseDuration] = useState(pause_duration)
  const [EndingDuration, setEndingDuration] = useState(
    ending_duration >= 0 ? ending_duration
    : ending_duration < 0 && use_text_cursor ? 4400
    : base_speed
  )
  const [TextCursor, setTextCursor] = useState({
    use: use_text_cursor,
    max_text_cursor_blinks: max_text_cursor_blinks,
    intervalId: undefined,
    timeoutId: undefined,
    clearTimingEvents: function() {
      clearInterval(this.intervalId)
      clearTimeout(this.timeoutId)
    },
    iteration: 0
  })
  const textP = useRef(0)
  const textCursorStyle = useRef({borderRight: "4px solid"})


  // initial useEffect
  useEffect(() => {
    if (begin_animation) {
      // start TypedText updates
      setTimeout(() => {
        setNewInterval()
      }, typing_delay)
    }
  }, [begin_animation])

  // useEffect for text updates
  useEffect(() => {
    // TextCursor updates
    if (TextCursor.use) {
      // Initial setup
      // show the text cursor
      if (TextCursor.intervalId) {
        setStyle(() => {
          return {...Style, ...textCursorStyle.current}
        })
      }
      TextCursor.clearTimingEvents()
      TextCursor.iteration = 0

      // Begin TextCursor animation
      // start a new interval for TextCursor
      TextCursor.intervalId = setInterval(() => {
        // hide the text cursor
        setStyle(StyleOriginal)
        TextCursor.timeoutId = setTimeout(() => {
          // show the text cursor
          setStyle(() => {
            return {...Style, ...textCursorStyle.current}
          })
        }, 550)

        // conditions for stopping TextCursor's animation
        TextCursor.iteration++
        if (TextCursor.iteration > TextCursor.max_text_cursor_blinks) {
          TextCursor.clearTimingEvents()
          setStyle(StyleOriginal)
        }
      }, 1100)
    }

    // conditions for stopping the TypedText animation
    if (DisplayText.text === FullText) {
      clearInterval(DisplayText.intervalId)

      setTimeout(() => {
        TextCursor.clearTimingEvents()
        setStyle(StyleOriginal)

        if (setNextAnimationState) {
          setNextAnimationState(true)
        }
      }, EndingDuration)
    }
  }, [DisplayText])


  // functions for updating TypedText
  function setNewInterval() {
    DisplayText.intervalId = setInterval(() => {
      if (textP.current !== FullText.length)
        updateTypedText()
      else {
        clearInterval(DisplayText.intervalId)
      }
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
        pauseBeforeUpdate()
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

  function pauseBeforeUpdate() {
    clearInterval(DisplayText.intervalId)
    DisplayText.intervalId = setTimeout(() => {
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
  return <span className={ClassNames} style={Style}>
    {DisplayText.text}
  </span>
}
