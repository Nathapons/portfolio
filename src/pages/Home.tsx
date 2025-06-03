import React, { useEffect, useState } from "react";
import WelcomeText from "../components/WelcomeText";
import Greeting from "../components/Greeting";
import MySkill from "../components/MySkill";
import Connect from "../components/Connect";
import WorkExperience from "../components/WorkExperience";
import WorkExperienceList from "../components/WorkExperienceList";

const Home: React.FC = () => {
  const [isComp, setIsComp] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsComp(window.innerWidth > 1050);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="main-content">
      <Greeting isComp={isComp} />
      <WelcomeText isComp={isComp} />
      <WorkExperience isComp={isComp} />
      <WorkExperienceList isComp={isComp} />
      <MySkill isComp={isComp} />
      <Connect isComp={isComp} />
    </main>
  );
};

export default Home;
