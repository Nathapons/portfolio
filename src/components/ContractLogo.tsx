import React from 'react'
import { LinkedinOutlined, GithubOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const ContractLogo: React.FC = () => {
    const linkedinUrl: string = 'https://www.linkedin.com/in/nuthapon-sripornprasert-a41138213/'
    const githubUrl: string = 'https://github.com/Nathapons'
    const facebookUrl: string = 'https://www.facebook.com/nax.seekid/?locale=th_TH'
    const instragramUrl: string = 'https://www.instagram.com/nuthapon.s/'

    return (
        <div className='icon-group'>
            {<a target="_blank" href={facebookUrl}>
                <FacebookOutlined className="linkedin-icon" />
            </a>}
            {<a target="_blank" href={githubUrl} className="github-style">
                <GithubOutlined className="linkedin-icon" />
            </a>}
            {<a target="_blank" href={linkedinUrl} className="profile-style">
                <LinkedinOutlined className="linkedin-icon" />
            </a>}
            {<a target="_blank" href={instragramUrl} className="instragram-style">
                <InstagramOutlined className="linkedin-icon" />
            </a>}
        </div>
    )
}

export default ContractLogo;