"use client";
import { Button, Drawer, Row } from 'antd';
import { useState } from 'react'

interface Props {
    menu: any;
}

const MenuButton = ({ menu }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => {setOpen(!open)}} style={{marginLeft: '10px', backgroundColor: '#ffcc00', color: 'white'}}>
                Menu
            </Button>
            <Drawer
                title="Portfolio"
                placement="right"
                onClick={() => {setOpen(!open)}}
                onClose={() => {setOpen(!open)}}
                open={open}
            >{menu}</Drawer>
        </>
    )
}

export default MenuButton;