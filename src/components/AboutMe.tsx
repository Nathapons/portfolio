import { Col, Row } from 'antd'
import styled from 'styled-components'

const AboutMeBox = styled(Row)`
    color: white;
    background-color: #2f5c9f;
    padding: 1.6px 1.6px;
    

    @media (min-width: 1050px) {
        justify-context: center;
        padding: 24px 320px;
    }
`

const AboutMe = () => {
    return (
        <AboutMeBox>
            <Row><Col xs={24} sm={24} lg={24} md={24} xl={24} xxl={24}><h2 style={{textDecoration: "underline"}}>About Me</h2></Col></Row>
            <Row style={{fontSize: "1.2rem", textAlign: "left"}}>
                <Col xs={24} lg={24}>
                    <p style={{margin: "0px", fontSize: "1.2rem"}}>
                        Here there! I am Nuthapon, a coding enthusiast. I love creating websites that are easy to use.
                        I know languages like Python, Javascript, and Golang, I enjoy challenges and am constantly learning to stay on top of the latest in tech. 
                        Whether it's fixing bugs or exploring new ideas, I'm always up for the adventure. Let's collaborate and bring your digital vision to life!
                    </p>
                </Col>
            </Row>
        </AboutMeBox>
    )
}

export default AboutMe
