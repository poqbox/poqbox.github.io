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


  // return the React component
  return (
    <div id="HomepageSubMenu">
      <hr className="hr-top" />
      <div id="HomepageSubMenuItems">
        {MenuList}
      </div>
      {(CurrentPage) ? <>
        <HomepageSubMenuHRBottom setCurrentPage={setCurrentPage} />
        <ToHomepageButton setCurrentPage={setCurrentPage} />
      </> : null}
    </div>
  )
}


function HomepageSubMenuHRBottom({setCurrentPage=null}) {
  const [Style, setStyle] = useState({opacity: 0}) // hide the component until needed

  useEffect(() => {
    if (setCurrentPage)
      setStyle({})  // unhide the component
    else
      setStyle({opacity: 0})
  }, [setCurrentPage])

  // return the React component
  return (
    <hr className="hr-bottom" style={Style}/>
  )
}