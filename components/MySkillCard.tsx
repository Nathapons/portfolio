import techStack from '../datas/TechStack.json'
import { Col, Row } from 'antd';


const MySkillCard = () => {
    return (
        <Row gutter={[10, 10]} style={{justifyContent: 'center'}}>
            {techStack.map((item, index) => {
                return (
                    <Col key={index}>
                        
                    </Col>
                )
            })}
        </Row>
    )
}

export default MySkillCard;