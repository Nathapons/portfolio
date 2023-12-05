import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { AlignLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Props } from '../types/Navbar';
import Pdf from '../assets/Nuthapon.Resume.pdf'
import '../styles/Navbar.css'


const Navbar: React.FC<Props> = (props) => {
    const { menu } = props;
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
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
            <Link to={Pdf} download="Nuthapon-Resume" target='_blank' rel='noreferrer'>
                <Button type="primary" className="resume-btn">Resume</Button>
            </Link>
        </nav>
    )
}

export default Navbar;