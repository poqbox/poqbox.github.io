import { useState, useEffect } from "react"

export default function ToHomepageButton({CurrentPage=null, setCurrentPage=null}) {
  const [ClassNames, setClassNames] = useState(null)


  useEffect(() => {
    if (CurrentPage)
      setClassNames("shown")  // unhide the component
    else
      setClassNames("hidden")
  }, [CurrentPage])


  // event handlers
  function handleOnClick() {
    if (setCurrentPage)
      setCurrentPage(null)
  }


  // return the React component
  return (
    <img id="ToHomepageButton" className={ClassNames} src="/icons/arrow-left.svg" onClick={handleOnClick} />
  )
}