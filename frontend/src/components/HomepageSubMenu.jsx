import { useEffect, useState } from "react"
import ObfuscatedText from "./ObfuscatedText"
import data from '../data/data'
import ToHomepageButton from "./ToHomepageButton"


export default function HomepageSubMenu({CurrentMenu=null, CurrentPage=null, setCurrentPage=null}) {
  const [MenuList, setMenuList] = useState([])


  // useEffect for setting the contents of the sub-menu
  useEffect(() => {
    switch (CurrentMenu) {
      case data["homepage-navbar"][0].title:
        setMenuList([
          <a className="HomepageNavSubItem" onClick={handleOnClick}>
            Undergoing construction
          </a>
        ])
        break
      case data["homepage-navbar"][1].title:
        setMenuList([
          <a className="HomepageNavSubItem" href="https://poqbox.github.io/consoles-in-space/" onClick={handleHyperlink}>
            Consoles in Space
          </a>,
          <a className="HomepageNavSubItem" href="https://poqbox.github.io/playing-cards/" onClick={handleHyperlink}>
            Cardception
          </a>
        ])
        break
      case data["homepage-navbar"][2].title:
        setMenuList([
          <a className="HomepageNavSubItem" onClick={handleOnClick}>
            ETA: <ObfuscatedText length={2} speed={120} style={{fontFamily: "inherit"}} />
          </a>
        ])
        break
      default:
        setMenuList([])
    }
  }, [CurrentMenu])


  // event handlers
  function handleHyperlink(e) {
    e.preventDefault()
    const pageData = {
      type: "href",
      title: e.currentTarget.textContent,
      href: e.currentTarget.getAttribute("href")
    }
    setCurrentPage(pageData)
  }
  function handleOnClick() {
    setCurrentPage("WIP")
  }


  // return the React component
  return (
    <div id="HomepageSubMenu">
      {(CurrentPage) ? <ToHomepageButton setCurrentPage={setCurrentPage} /> : null}
      {MenuList}
    </div>
  )
}
