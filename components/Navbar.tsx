"use client"; 
import { Button, Drawer, Row } from 'antd';
import React, { useState } from 'react'
import Link from 'next/link'
import styled from "styled-components";

interface Props {
    menu: any;
}

const CustomNavRow = styled(Row)`
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #34353a;
    color: white;
`

const MenuButton = styled(Button)`
    margin-left: 10px;
    background-color: #ffcc00;
    color: white;
`

const Navbar = ({ menu }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <CustomNavRow>
            <Link href="/" style={{textDecoration: "none"}}>
                <h1 style={{margin: "0", fontFamily: "'Caveat', cursive", color: "white"}}>Nuthapon.S</h1>
            </Link>
            <MenuButton onClick={() => {setOpen(!open)}}>
                <span style={{backgroundColor: "#ffcc00", color: 'white'}}>Menu</span>
            </MenuButton>
            <Drawer
                title="Portfolio"
                placement="right"
                onClick={() => {setOpen(!open)}}
                onClose={() => {setOpen(!open)}}
                open={open}
            >{menu}</Drawer>
        </CustomNavRow>
    )
}

export default Navbar;