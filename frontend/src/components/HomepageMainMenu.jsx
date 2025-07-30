import { useEffect } from "react"
import data from '../data/data'


export default function HomepageMainMenu({ActiveMenu, children}) {
  // useEffect for determing the active menu
  useEffect(() => {
    if (ActiveMenu) {
      data['homepage-navbar'].forEach((item) => {
        if (item.title !== ActiveMenu)
          document.getElementById(item.title).classList.remove("active")
      })
      document.getElementById(ActiveMenu).classList.add("active")
      document.getElementById("HomepageSubMenu").classList.add("active")
    }
    else {
      document.getElementById("HomepageSubMenu").classList.remove("active")
    }
  }, [ActiveMenu])


  // return the React component
  return (
    <div id="HomepageMainMenu">
      {children}
    </div>
  )
}
