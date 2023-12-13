import { LinkedinOutlined, GithubOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { ContractGroupType } from '../types/ContractLogo';

const ContractLogo = () => {
    const linkedinUrl: string = 'https://www.linkedin.com/in/nuthapon-sripornprasert-a41138213/'
    const githubUrl: string = 'https://github.com/Nathapons'
    const facebookUrl: string = 'https://www.facebook.com/nax.seekid/?locale=th_TH'
    const instragramUrl: string = 'https://www.instagram.com/nuthapon.s/'

    const contractGroup: ContractGroupType[] = [
        {
            url: facebookUrl,
            icon: <FacebookOutlined className="fb-icon" style={{color: "#1677ff"}}/>
        },
        {
            url: githubUrl,
            icon: <GithubOutlined className="github-icon" style={{color: "black"}}/>
        },
        {
            url: linkedinUrl,
            icon: <LinkedinOutlined className="linkedin-icon" style={{color: "#1677ff"}}/>
        },
        {
            url: instragramUrl,
            icon: <InstagramOutlined style={{color: "rgb(240, 6, 45)"}}/>
        }
    ]

    return (
        <div className='icon-group'>
            {contractGroup.map((item, index) => {
                return (
                    <Link to={item.url} key={index} target='_blank'>{item.icon}</Link>
                )
            })}
        </div>
    )
}

export default ContractLogo;