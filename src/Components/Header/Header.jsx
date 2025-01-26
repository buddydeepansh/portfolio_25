import React from "react"
import "./Header.less"
import Resume from "../../assets/DeepanshAgrawal_Resume.pdf"
const Header = () => {
  const downloadResume = () => {
    const el = document.createElement("a")
    el.style.display = "none"
    el.href = Resume
    el.download = "Deepansh_Agrawal_Resume"
    document.body.appendChild(el)
    el.click()
    document.body.removeChild(el)
  }
  
  return <div className="HeaderRoot">
    <div className="leftSide">
      <a>Deepansh A</a>
    </div>
    <div className="rightSide">
      <button className="contactBtn" >Contact</button>
      <button className="resumeBtn" onClick={downloadResume} >Download Resume</button>
    </div>
  </div>
}


export default Header
