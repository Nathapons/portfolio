import { LinkedinOutlined, GithubOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import styled from 'styled-components';

interface ContractGroupType {
    url: string
    icon: any
}

const CustomRow = styled(Row)`
    margin-top: 20px;

    @media (max-width: 1050px) {
        justify-content: center
    }
`

const ContractLogo = () => {
    const linkedinUrl: string = 'https://www.linkedin.com/in/nuthapon-sripornprasert-a41138213/'
    const githubUrl: string = 'https://github.com/Nathapons'
    const facebookUrl: string = 'https://www.facebook.com/nax.seekid/?locale=th_TH'
    const instragramUrl: string = 'https://www.instagram.com/nuthapon.s/'

    const contractGroup: ContractGroupType[] = [
        {
            url: facebookUrl,
            icon: <FacebookOutlined className="fb-icon" style={{color: "#1677ff", fontSize: "30px"}}/>
        },
        {
            url: githubUrl,
            icon: <GithubOutlined className="github-icon" style={{color: "black", fontSize: "30px"}}/>
        },
        {
            url: linkedinUrl,
            icon: <LinkedinOutlined className="linkedin-icon" style={{color: "#1677ff", fontSize: "30px"}}/>
        },
        {
            url: instragramUrl,
            icon: <InstagramOutlined style={{color: "rgb(240, 6, 45)", fontSize: "30px"}}/>
        }
    ]

    return (
        <CustomRow gutter={[1, 1]}>
            {contractGroup.map((item, index) => {
                return (
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} flex={1}>
                        <Link to={item.url} key={index} target='_blank'>{item.icon}</Link>
                    </Col>
                )
            })}
        </CustomRow>
    )
}

export default ContractLogo;