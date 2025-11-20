import { useState, useEffect } from "react"
import data from '../data/data'


export default function HomepageMainMenu({ActiveMenu, children}) {
  const [ClassNames, setClassNames] = useState(null)


  // useEffect for determing the active menu
  useEffect(() => {
    if (ActiveMenu) {
      data['homepage-navbar'].forEach((item) => {
        if (item.title !== ActiveMenu)
          document.getElementById(item.title).classList.remove("active")
      })
      document.getElementById(ActiveMenu).classList.add("active")
      document.getElementById("HomepageSubMenu").classList.add("active")
      setClassNames("open")
    }
    else {
      document.getElementById("HomepageSubMenu").classList.remove("active")
      setClassNames(null)
    }
  }, [ActiveMenu])


  // return the React component
  return (
    <div id="HomepageMainMenu" className={ClassNames}>
      {children}
    </div>
  )
}
