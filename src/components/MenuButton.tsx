import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuItemProps } from '../interfaces/globalInterfaces';
import SidebarMenu from './SidebarMenu';

interface Props {
    menu: MenuItemProps[];
}

const MenuButton: React.FC<Props> = ({ menu }) => {
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
                <SidebarMenu />
            </Drawer>
        </>
    );
};

export default MenuButton;
