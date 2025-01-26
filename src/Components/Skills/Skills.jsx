import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined"
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined"
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined"
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined"
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import SatelliteAltOutlinedIcon from "@mui/icons-material/SatelliteAltOutlined"
import TvIcon from "@mui/icons-material/Tv"
import React from "react"
import "./Skills.less"

const Skills = () => {
  return (
    <div className="SkillsRoot">
      <div className="skill">
        <span>
          <TvIcon fontSize="large" />
        </span>
        <p className="skillText">Frontend Developer</p>
      </div>
      <div className="skill">
        <span>
          <BuildOutlinedIcon fontSize="large" />
        </span>
        <p className="skillText">Web Application Developer</p>
      </div>
      <div className="skill">
        <span>
          <LanguageOutlinedIcon fontSize="large" />
        </span>
        <p className="skillText">React.js Specialist</p>
      </div>
      <div className="skill">
        <span>
          <Groups3OutlinedIcon fontSize="large" />
        </span>
        <p className="skillText">Team Lead</p>
      </div>
      <div className="skill">
        <span>
          <SatelliteAltOutlinedIcon fontSize="large" />
        </span>
        <p className="skillText">API Data Consumer</p>
      </div>
      <div className="skill">
        <span>
          <HandshakeOutlinedIcon fontSize="large" />
        </span>
        <p className="skillText">Cross-functional Collaborator</p>
      </div>
      <div className="skill">
        <span>
          <FlashOnOutlinedIcon fontSize="large" />
        </span>
        <p className="skillText">Performance Optimizer</p>
      </div>
      <div className="skill">
        <span>
          <CachedOutlinedIcon fontSize="large" />
        </span>
        <p className="skillText">Continuous Learner</p>
      </div>
    </div>
  )
}

export default Skills
