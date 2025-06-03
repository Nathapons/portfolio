import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import menuName from '../data/MenuName.json';
import { MenuItemProps } from '../interfaces/globalInterfaces';

const SidebarMenu: React.FC = () => {
    return (
        <Menu mode="inline">
            {menuName.map((item: MenuItemProps, index: number) => {
                return (
                    <Menu.Item key={index}>
                        <Link to={item.path}>{item.name}</Link>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
};

export default SidebarMenu;
