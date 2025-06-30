import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuItemProps, MenuBarProps } from '@/interfaces/globalInterfaces';

const SidebarMenu: React.FC<MenuBarProps> = ({ menuItems }) => {
    return (
        <Menu mode="inline">
            {menuItems.map((item: MenuItemProps, index: number) => {
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
