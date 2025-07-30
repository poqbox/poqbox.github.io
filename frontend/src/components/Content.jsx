import { useState, useEffect } from "react"


export default function Content({show=true, setCurrentPage=null, children}) {
  const [ClassNames, setClassNames] = useState("")


  // useEffect for the component's hiding animation
  useEffect(() => {
    if (show) {
      if (setCurrentPage)
        setCurrentPage("Content")
      setClassNames(" shown")
    }
    else
      setClassNames(" hidden")
  }, [show])


  // return the React component
  return (
    <div className={`Content${ClassNames}`}>
      {children}
    </div>
  )
}