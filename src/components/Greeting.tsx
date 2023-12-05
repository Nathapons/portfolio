import Typewriter from 'typewriter-effect'
import MyPic from "./MyPic";
import '../styles/Greeting.css'
import { LinkedinOutlined, GithubOutlined, FacebookOutlined } from '@ant-design/icons';

const Greeting: React.FC = () => {
    const linkedinUrl: string = 'https://www.linkedin.com/in/nuthapon-sripornprasert-a41138213/'
    const githubUrl: string = 'https://github.com/Nathapons'
    const facebookUrl: string = 'https://www.facebook.com/nax.seekid/?locale=th_TH'

    return (
        <div className="greeting-box">
            <MyPic />
            <div className="greeting-sub-box">
                <h1 className="greeting-text">Hi, I am Nuthapon Sripornprasert</h1>
                <h1 className="position-text">Software Engineering</h1>
                <Typewriter
                    options={{
                        strings: [
                            '<strong>GROWTH MINDSET</strong>',
                            '<strong>LEANING PROGRAM</strong>',
                            '<strong>SELF-MOTIVATION</strong>',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
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
                </div>
            </div>
        </div>
    )
}

export default Greeting