import React, { useEffect, useState } from "react";
import WelcomeText from "../components/WelcomeText";
import Greeting from "../components/Greeting";
import MySkill from "../components/MySkill";
import WorkExperience from "../components/WorkExperience";

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
      <div id="greeting" className="min-h-screen">
        <Greeting isComp={isComp} />
      </div>
      <div id="work_experience" className="min-h-screen">
        <WorkExperience isComp={isComp} />
      </div>
      <div id="my_skill" className="min-h-screen">
        <MySkill isComp={isComp} />
      </div>
    </main>
  );
};

export default Home;
