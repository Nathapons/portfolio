import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import '../styles/Navbar.css'
import { AlignLeftOutlined } from '@ant-design/icons';
import { Props } from '../types/Navbar';


const Navbar: React.FC<Props> = (props) => {
    const { menu } = props;
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const downloadFile = () => {
        const pdfUrl: string = ''
    }

    return (
        <nav>
            <Button type="primary" onClick={showDrawer} icon={<AlignLeftOutlined />} className="menu-btn"></Button>
            <Drawer
                title="Nathapon Portfolio"
                placement="left"
                onClose={onClose}
                open={open}
            >{menu}</Drawer>
            <Button type="primary" className="resume-btn">Resume</Button>
        </nav>
    )
}

export default Navbar;