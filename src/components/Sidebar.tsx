import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

const Sidebar = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="3" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
