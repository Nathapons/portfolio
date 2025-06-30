import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuItemProps } from '@/interfaces/globalInterfaces';
import { HomeOutlined, TruckOutlined } from "@ant-design/icons";

const SidebarMenu: React.FC = () => {
    const menuItem: MenuItemProps[] = [
        { name: 'Home', path: '/', icon: <HomeOutlined className="mr-2" /> },
        { name: 'Certificates', path: '/certificate', icon: <TruckOutlined className="mr-2" /> }
    ];

    return (
        <Menu mode="inline">
            {menuItem.map((item, index) => {
                return (
                    <Menu.Item key={index}>
                        <Link to={item.path}>{item.icon}{item.name}</Link>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
};

export default SidebarMenu;
