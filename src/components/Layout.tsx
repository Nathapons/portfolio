import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import CopyRight from './CopyRight';
import menuData from '../data/MenuName.json';

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar menu={menuData} />
      <main className="content">
        <Outlet />
      </main>
      <footer>
        <CopyRight />
      </footer>
    </div>
  );
};

export default Layout;
