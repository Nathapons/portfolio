import { Col, Image, Row } from "antd";

import Address from "../components/Address";
import GithubAbout from "../components/GithubAbout";
import TechStack from "../components/TechStack";

import styled from "styled-components";


const ProfileRow = styled(Row)`
    margin-top: 30px;
    border: 1px solid rgb(224, 222, 222);
    border-radius: 20px;
    background-color: #f0f0f0;
    justify-content: center;
    

    @media (min-width: 800px) {
        margin-right: 50px;
        margin-left: 50px;
    }
`

const ColumnPic = styled(Col)`
    @media (max-width: 1051) {
        justify-content: center;
        margin-bottom: 20px;
    }
`

const Profile = () => {
    const img: string = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1701619719/upload/kqc8rgleicctewcci0cv.jpg"

    return (
        <ProfileRow gutter={[20, 20]} >
            <ColumnPic xl={6} lg={6} md={24} sm={24}><Image src={img} width={300} style={{borderRadius: "10px"}} preview={false}/></ColumnPic>
            <Col xl={6} lg={6} md={24} sm={24} flex="1 0 100%"><GithubAbout /></Col>
            <Col xl={6} lg={6} md={24} sm={24} flex="1 0 100%"><Address /></Col>
            <Col xl={6} lg={6} md={24} sm={24} flex="1 0 100%"><TechStack /></Col>
        </ProfileRow>
    )
}

export default Profile;