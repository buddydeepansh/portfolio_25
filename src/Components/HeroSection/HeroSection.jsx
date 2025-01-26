import React from "react"
import "./HeroSection.less"
import Pic from "../../assets/Deepansh_Photo2.jpg"
const HeroSection = () => {
  return <div className="HeroSectionRoot">
    <div className="leftSection">
      <p className="p p1">I'm Deepansh</p>
      <p className="p p2">Web Developer</p>
      <p className="p p3">React JS Developer</p>
      <p className="p p4">JavaScript | HTML | CSS</p>
      <p className="p p5">MobX | MUI | AntD</p>
      <p className="p p6">Git | Figma | Adobe Xd</p>
    </div>
    <div className="rightSection">
      <img src={Pic} alt="photoDeepansh" loading="lazy" />
    </div>
  </div>
}

export default HeroSection
