"use client";
import { Menu } from "antd";
import Link from 'next/link'
import menuName from '../datas/ManuName.json'


const SidbarMenu: React.FC = () => {

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