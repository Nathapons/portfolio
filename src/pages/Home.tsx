import React, { useEffect, useState } from "react";
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
    <main>
      <div id="greeting">
        <Greeting isComp={isComp} />
      </div>
      <div id="work_experience" className="bg-zinc-800">
        <WorkExperience isComp={isComp} />
      </div>
      <div id="my_skill">
        <MySkill isComp={isComp} />
      </div>
    </main>
  );
};

export default Home;
