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
          <a className="HomepageNavSubItem" onClick={ () => {setCurrentPage("WIP")} }>
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
          <a className="HomepageNavSubItem" onClick={ () => {setCurrentPage("WIP")} }>
            ETA: <ObfuscatedText length={2} animationInterval={120} style={{fontFamily: "inherit"}} />
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


  // helper element
  function HomepageSubMenuHRBottom({CurrentPage=null}) {
    const [Style, setStyle] = useState({opacity: 0}) // hide the component until needed

    useEffect(() => {
      if (CurrentPage)
        setStyle({})  // unhide the component
      else
        setStyle({opacity: 0})
    }, [CurrentPage])

    // return the React component
    return (
      <hr className="hr-bottom" style={Style} />
    )
  }


  // return the React component
  return (
    <div id="HomepageSubMenu">
      {(CurrentMenu)
        ? <hr className="hr-top" />
        : null
      }
      <div id="HomepageSubMenuItems">
        {MenuList}
      </div>
      {(CurrentPage) ? <>
        <HomepageSubMenuHRBottom CurrentPage={CurrentPage} />
        <ToHomepageButton CurrentPage={CurrentPage} setCurrentPage={setCurrentPage} /></>
        : null}
    </div>
  )
}