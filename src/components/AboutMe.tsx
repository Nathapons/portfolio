import { Col, Row } from 'antd'

const AboutMe = () => {
    return (
        <Row style={{padding: "1.5rem 20rem", backgroundColor: "#2f5c9f", color: "white"}}>
            <Row><Col xs={24} lg={24} style={{justifyContent: "center"}}><h2 style={{textDecoration: "underline"}}>About Me</h2></Col></Row>
            <Row style={{fontSize: "1.2rem", textAlign: "left"}}>
                <Col xs={24} lg={24}>
                    <p style={{margin: "0px", fontSize: "1.2rem"}}>
                        Here there! I am Nuthapon, a coding enthusiast. I love creating websites that are easy to use.
                        I know languages like Python, Javascript, and Golang, I enjoy challenges and am constantly learning to stay on top of the latest in tech. 
                        Whether it's fixing bugs or exploring new ideas, I'm always up for the adventure. Let's collaborate and bring your digital vision to life!
                    </p>
                </Col>
            </Row>
        </Row>
    )
}

export default AboutMe
