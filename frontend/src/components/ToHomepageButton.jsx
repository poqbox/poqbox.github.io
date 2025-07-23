import { useState, useEffect } from "react"

export default function ToHomepageButton({setContentPage=null}) {
  const [Style, setStyle] = useState({opacity: 0}) // hide the component until needed


  useEffect(() => {
    if (setContentPage)
      setStyle({})  // unhide the component
    else
      setStyle({opacity: 0})
  }, [setContentPage])


  // event handlers
  function handleOnClick() {
    if (setContentPage)
      setContentPage(null)
  }


  // return the React component
  return (
    <img className="ToHomepageButton" style={Style} src="/icons/arrow-left.svg" onClick={handleOnClick} />
  )
}