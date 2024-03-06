"use client";
import { Menu } from "antd";
import Link from 'next/link'
import { useEffect, useState } from "react";


const SidbarMenu: React.FC = () => {
    const [menuName, setMenuName] = useState<any[]>([]);

    useEffect(() => {
        const getMenu = async () => {
            const menubar = await fetch('http://localhost:3000/apis')
            const response = await menubar.json();
            console.log(response)
            setMenuName(response);
        }
        getMenu();
    }, [])

    return (
        <Menu mode="inline">
            {menuName.map((item, index) => {
                return (
                    <Menu.Item key={index}><Link href={item.path}>{item.name}</Link></Menu.Item>
                )
            })}
        </Menu>
    )
}

export default SidbarMenu;