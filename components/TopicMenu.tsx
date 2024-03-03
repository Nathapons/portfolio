"use client";
import { Menu } from "antd";
import Link from 'next/link'


interface TopicType {
    name: string
    path: string
}

const TopicMenu: React.FC = () => {
    const topics: TopicType[] = [
        {
            "name": "About me",
            "path": "/"
        }
    ]

    return (
        <Menu mode="inline">
            {topics.map((item, index) => {
                return (
                    <Menu.Item key={index}><Link href={item.path}>{item.name}</Link></Menu.Item>
                )
            })}
        </Menu>
    )
}

export default TopicMenu;