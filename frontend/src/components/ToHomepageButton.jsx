import { useState, useEffect } from "react"

export default function ToHomepageButton({CurrentPage=null, setCurrentPage=null}) {
  const [Style, setStyle] = useState({opacity: 0}) // hide the component until needed


  useEffect(() => {
    if (CurrentPage)
      setStyle({})  // unhide the component
    else
      setStyle({opacity: 0})
  }, [CurrentPage])


  // event handlers
  function handleOnClick() {
    if (setCurrentPage)
      setCurrentPage(null)
  }


  // return the React component
  return (
    <img className="ToHomepageButton" style={Style} src="/icons/arrow-left.svg" onClick={handleOnClick} />
  )
}