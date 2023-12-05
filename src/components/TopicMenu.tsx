import { Menu } from "antd";
import { Props } from "../types/TopicMenu";

const TopicMenu: React.FC<Props> = (props) => {
    const { topics } = props

    return (
        <Menu mode="inline">
            {topics.map((topic, index) => {
                return (
                    <Menu.Item key={index}><a href="https://www.google.co.th/?hl=th">{topic}</a></Menu.Item>
                )
            })}
        </Menu>
    )
}

export default TopicMenu;