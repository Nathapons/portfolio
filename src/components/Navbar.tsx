import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { AlignLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Pdf from '../assets/Nuthapon.Resume.pdf'
import '../styles/Navbar.css'


interface Props {
    menu: any
}


const Navbar = ({ menu }: Props) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const clickMenu = () => {
        setOpen(false)
    }

    return (
        <nav>
            <Button type="primary" onClick={showDrawer} icon={<AlignLeftOutlined />} className="menu-btn"></Button>
            <Drawer
                title="Nuthapon Portfolio"
                placement="left"
                onClick={clickMenu}
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