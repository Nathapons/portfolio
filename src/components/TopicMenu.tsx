import { Menu } from "antd";
import { Props } from "../types/TopicMenu";
import { Link } from "react-router-dom";

const TopicMenu: React.FC<Props> = (props) => {
    const { topics } = props

    return (
        <Menu mode="inline">
            {topics.map((topic, index) => {
                return (
                    <Menu.Item key={index}><Link to="/">{topic}</Link></Menu.Item>
                )
            })}
        </Menu>
    )
}

export default TopicMenu;