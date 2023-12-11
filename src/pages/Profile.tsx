import MyPic from "../components/MyPic";
import Address from "../components/Address";
import '../styles/Profile.css'
import GithubAbout from "../components/GithubAbout";
import TechStack from "../components/TechStack";
import { Col, Row } from "antd";

const Profile = () => {
    const img: string = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1701619719/upload/kqc8rgleicctewcci0cv.jpg"
    const classname: string = "my-profile2"

    return (
        <>
            <Row className="row">
                <Col flex="1 0 25%" className="column"><MyPic img={img} classname={classname} /></Col>
                <Col flex="1 0 25%" className="column"><GithubAbout /></Col>
                <Col flex="1 0 25%" className="column"><Address /></Col>
                <Col flex="1 0 25%" className="column"><TechStack /></Col>
            </Row>
        </>
    )
}

export default Profile;