import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import TopicMenu from "./components/TopicMenu"
import Navbar from "./components/Navbar"
import WorkExperience from "./pages/WorkExperience"
import Skill from "./pages/Skill"
import Project from "./pages/Project"
import Education from "./pages/Education"
import Profile from "./pages/Profile"
import Certificate from "./pages/Certificate"
import Contract from "./pages/Contract"


const App = () => {
  const Menu = <TopicMenu />

    return (
      <BrowserRouter>
        <Navbar menu={Menu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="contract" element={<Contract />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App
