import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import SidebarMenu from './SidebarMenu';
import { MenuBarProps } from '@/interfaces/globalInterfaces';

const MenuButton: React.FC<MenuBarProps> = ({ menuItems }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Button 
                onClick={toggleDrawer} 
                style={{marginLeft: '10px', backgroundColor: '#ffcc00', color: 'white'}}
            >
                Menu
            </Button>
            <Drawer
                title="Nuthapon Portfolio"
                placement="right"
                onClick={toggleDrawer}
                onClose={toggleDrawer}
                open={open}
            >
                <SidebarMenu menuItems={menuItems}/>
            </Drawer>
        </>
    );
};

export default MenuButton;
