import { Col, Image, Row } from "antd";

import Address from "../components/Address";
import GithubAbout from "../components/GithubAbout";
import TechStack from "../components/TechStack";

import '../styles/Profile.css'


const Profile = () => {
    const img: string = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1701619719/upload/kqc8rgleicctewcci0cv.jpg"

    return (
        <>
            <Row className="row">
                <Col flex="1 0 100%" className="column-pic"><Image src={img} /></Col>
                <Col flex="1 0 100%" className="column"><GithubAbout /></Col>
                <Col flex="1 0 100%" className="column"><Address /></Col>
                <Col flex="1 0 100%" className="column"><TechStack /></Col>
            </Row>
        </>
    )
}

export default Profile;