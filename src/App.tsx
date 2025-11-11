import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Certificate from './pages/Certificate';
import GithubTimeline from './pages/GithubTimeline';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/github" element={<GithubTimeline />} />
      </Route>
    </Routes>
  );
};

export default App;
