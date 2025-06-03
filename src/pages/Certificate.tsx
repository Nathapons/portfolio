import React, { useEffect, useState } from "react";
import CertificateTitle from "../components/CertificateTitle";
import CertificateList from "../components/CertificateList";

const Certificate: React.FC = () => {
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
      <CertificateTitle isComp={isComp} />
      <CertificateList isComp={isComp} />
    </main>
  );
};

export default Certificate;
