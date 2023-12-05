import React from 'react'
import { LinkedinOutlined, GithubOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

import '../styles/ContractLogo.css'
import { ContractGroupType } from '../types/ContractLogo';
import { Link } from 'react-router-dom';

const ContractLogo: React.FC = () => {
    const linkedinUrl: string = 'https://www.linkedin.com/in/nuthapon-sripornprasert-a41138213/'
    const githubUrl: string = 'https://github.com/Nathapons'
    const facebookUrl: string = 'https://www.facebook.com/nax.seekid/?locale=th_TH'
    const instragramUrl: string = 'https://www.instagram.com/nuthapon.s/'

    const contractGroup: ContractGroupType[] = [
        {
            url: facebookUrl,
            icon: <FacebookOutlined className="fb-icon" />
        },
        {
            url: githubUrl,
            icon: <GithubOutlined className="github-icon" />
        },
        {
            url: linkedinUrl,
            icon: <LinkedinOutlined className="linkedin-icon" />
        },
        {
            url: instragramUrl,
            icon: <InstagramOutlined className="ig-icon" />
        }
    ]

    return (
        <div className='icon-group'>
            {contractGroup.map((item, index) => {
                return (
                    <Link to={item.url} key={index}>{item.icon}</Link>
                )
            })}
        </div>
    )
}

export default ContractLogo;