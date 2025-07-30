import Content from "./Content"


export default function UnderConstructionPage({ContentPage, setContentPage}) {
  return (
    <Content
      style={{backgroundImage: "linear-gradient( #ffcc55, #ff8888 96%, #ff6f44 96% )"}}
      show={ContentPage}
      setCurrentPage={setContentPage}
    >
      <div style={{
        color: "white",
        fontFamily: "Candara",
        fontSize: "20px",
        fontWeight: "bold",
        width: "fit-content",
        position: "relative",
        top: "30%",
        margin: "auto",
        textAlign: "center"
      }}
      >
        <div style={{fontSize: "64px", marginBottom: "16px"}}>{"< under-construction >"}</div>
        <div>In the meantime,</div>
        <div>you can find me here:</div>
        <div style={{marginTop: "8px", display: "flex", justifyContent: "center"}}>
          <div className='footer-icon-container' style={{margin: "0 12px"}}>
            <a href='https://www.linkedin.com/in/liukevin223/' target='_blank'>
              <img className='footer-icon linkedin' src='icons/linkedin.svg' />
            </a>
          </div>
          <div className='footer-icon-container' style={{margin: "0 12px"}}>
            <a href='https://github.com/poqbox' target='_blank'>
              <img className='footer-icon github' src='icons/github.svg' />
            </a>
          </div>
        </div>
      </div>
    </Content>
  )
}