import React, { useEffect, useState } from "react";
import GithubTitle from "../components/GithubTitle";
import Timeline from "../components/Timeline";


const GithubTimeline: React.FC = () => {
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
        <GithubTitle isComp={isComp} />
        <Timeline isComp={isComp} />
    </main>
  );
};

export default GithubTimeline;
