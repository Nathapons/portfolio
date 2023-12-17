import { Button, Drawer, Flex } from 'antd';
import { useState } from 'react';
import { AlignLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Pdf from '../assets/Nuthapon.Resume.pdf'

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
        <Flex style={{justifyContent: "space-between", marginBottom: "10px", marginTop: "10px"}}>
            <Button type="primary" onClick={showDrawer} icon={<AlignLeftOutlined />} style={{marginLeft: "10px"}}></Button>
            <Drawer
                title="Nuthapon Portfolio"
                placement="left"
                onClick={clickMenu}
                onClose={onClose}
                open={open}
            >{menu}</Drawer>
            <Link to={Pdf} download="Nuthapon-Resume" target='_blank' rel='noreferrer'>
                <Button type="primary" style={{marginRight: "10px"}}>Resume</Button>
            </Link>
        </Flex>
    )
}

export default Navbar;