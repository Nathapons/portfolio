import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"

import Home from "./pages/Home"
import TopicMenu from "./components/TopicMenu"
import Navbar from "./components/Navbar"
import WorkExperience from "./pages/WorkExperience"
import Skill from "./pages/Skill"
import Project from "./pages/Project"

const App: React.FC = () => {
  const Menu = <TopicMenu />

    return (
      <BrowserRouter>
        <Navbar menu={Menu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App
