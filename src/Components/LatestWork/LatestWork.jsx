import React from "react"
import "./LatestWork.less"
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined"
import project1 from "../../assets/project1.jpg"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"
import project4 from "../../assets/project4.jpg"
import Platinum from "../../assets/Platinum.jpg"
import Assure from "../../assets/Assure.jpg"

const LatestWork = () => {
  return (
    <div className="LatestWorkRoot">
      <p className="sectionTitle">
        My Latest Works <AutoAwesomeOutlinedIcon fontSize="large" />
      </p>
      <div className="projectContainer">
        <div className="project">
          <div className="imgWrpr">
            <img src={Platinum} alt="Platinum" />
          </div>
          <p className="projectTitle">IPRU Platinum</p>
          <p className="projectSubTitle">Contributed in this Policy holdding website and led the project from srach</p>
        </div>
        <div className="project">
          <div className="imgWrpr">
            <img src={Assure} alt="Assure" />
          </div>
          <p className="projectTitle">IPRU Assure</p>
          <p className="projectSubTitle">Contributed in this project by desiging some illustrations.</p>
        </div>
        <div className="project">
          <div className="imgWrpr">
            <img src={project1} alt="project1" />
          </div>
          <p className="projectTitle">MEAL FINDER API</p>
          <p className="projectSubTitle">This is a base JS project whihuses TheMealDB api for random meals.</p>
        </div>
        <div className="project">
          <div className="imgWrpr">
            <img src={project2} alt="project2" />
          </div>
          <p className="projectTitle">DICE GAME</p>
          <p className="projectSubTitle">A simple dice rollon game.</p>
        </div>
        <div className="project">
          <div className="imgWrpr">
            <img src={project3} alt="project3" />
          </div>
          <p className="projectTitle">DRUM KIT SET</p>
          <p className="projectSubTitle">A drum set to practice your musical skills using mouse/keyboard.</p>
        </div>
        <div className="project">
          <div className="imgWrpr">
            <img src={project4} alt="project4" />
          </div>
          <p className="projectTitle">PORTFOLIO OLD</p>
          <p className="projectSubTitle">An old portfolio created during the time of training sessions.</p>
        </div>
      </div>
      <a className="oldProject" target="_blank" href="https://buddydeepansh.github.io/PROJECTS/" >Find my all old projects here....</a>
    </div>
  )
}

export default LatestWork
