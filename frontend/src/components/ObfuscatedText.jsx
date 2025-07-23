import { useState, useEffect } from "react"


export default function ObfuscatedText({length=1, speed=60, style={}, AnimationState=true}) {
  // React objects
  // list of characters to be used in the obfuscated animation
  const [characters, setCharacters] = useState([
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    "?","!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","]","{","}"
  ])

  const [Speed, setSpeed] = useState(speed)
  const [Style, setStyle] = useState({fontFamily: "monospace", ...style})
  const [Text, setText] = useState("")
  const [Options, setOptions] = useState({
    intervalId: undefined,
    stopAnimation: function() {
      clearInterval(this.intervalId)
    }
  })


  // useEffect for controlling the obfuscated animation
  useEffect(() => {
    // begin animation
    if (AnimationState) {
      setText(() => generateText(length))
      Options.intervalId = setInterval(() => {
        setText(() => generateText(length))
      }, Speed)
    }

    // generate obfuscated text via recursion
    function generateText(length) {
      if (length > 0)
        return generateText(length - 1) + characters[Math.floor(Math.random() * characters.length)]
      else
        return ""
    }

    return () => {Options.stopAnimation()}
  }, [AnimationState, Speed])


  // return the React component
  return (
    <span className="ObfuscatedText" style={Style}>
      {Text}
    </span>
  )
}
