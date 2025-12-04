import { useState, useEffect } from "react"

export default function AlignContentButton({ContentAlignment, setContentAlignment, CurrentPage=null}) {
  const [ClassNames, setClassNames] = useState(null)
  const [IconSrc, setIconSrc] = useState(null)


  function setLeftAlignment() {
    setContentAlignment("align-left")
    setIconSrc("/icons/align-from-left.svg")
  }
  function setSidebarAlignment() {
    setContentAlignment("align-sidebar")
    setIconSrc("/icons/align-to-left.svg")
  }


  // initial useEffect
  useEffect(() => {
    setSidebarAlignment()
  }, [])

  
  useEffect(() => {
    if (CurrentPage)
      setClassNames("shown")  // unhide the component
    else
      setClassNames("hidden")
  }, [CurrentPage])


  // event handlers
  function handleOnClick() {
    if (setContentAlignment) {
      switch (ContentAlignment) {
        case "align-sidebar":
          setLeftAlignment()
          break
        case "align-left":
        default:
          setSidebarAlignment()
      }
    }
  }


  // return the React component
  return (
    <img id="AlignContentButton" className={ClassNames} src={IconSrc} onClick={handleOnClick} />
  )
}