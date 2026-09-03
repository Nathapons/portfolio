import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Certificate from './pages/Certificate';
import ProjectPrototype from './pages/ProjectPrototype';
import ProjectList from './pages/ProjectList';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/project" element={<ProjectList />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        {(import.meta as any).env.DEV && (
          <Route path="/project-prototype" element={<ProjectPrototype />} />
        )}
      </Route>
    </Routes>
  );
};

export default App;
