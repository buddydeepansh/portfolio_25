import React from "react"
import "./App.less"
import Contact from "./Components/Contact/Contact"
import Header from "./Components/Header/Header"
import HeroSection from "./Components/HeroSection/HeroSection"
import LatestWork from "./Components/LatestWork/LatestWork"
import Skills from "./Components/Skills/Skills"

const App = () => {
  return (
    <div className="root">
      <Header />
      <HeroSection />
      <Skills />
      <LatestWork />
      <Contact />
    </div>
  )
}

export default App
