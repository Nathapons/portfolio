import { Menu } from "antd";
import { Link } from "react-router-dom";


interface TopicType {
    name: string
    path: string
}

const TopicMenu: React.FC = () => {
    const topics: TopicType[] = [
        {
            name: "About me",
            path: "/"
        },
        {
            name: "Profile",
            path: "/profile"
        },
        {
            name: "Skill",
            path: "/skill"
        }
    ]

    return (
        <Menu mode="inline">
            {topics.map((item, index) => {
                return (
                    <Menu.Item key={index}><Link to={item.path}>{item.name}</Link></Menu.Item>
                )
            })}
        </Menu>
    )
}

export default TopicMenu;