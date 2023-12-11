import { useEffect, useState } from "react"
import { Button } from "antd"
import axios from "axios"

import '../styles/GithubAbout.css'
import { useNavigate } from "react-router-dom"


const GithubAbout = () => {
    const [name, setName] = useState<string>("");
    const [createdAt, setCreatedAt] = useState<Date>(new Date());
    const [followers, setFollowers] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const headers = {"Authorization": `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`}
        axios.get(`${import.meta.env.VITE_GITHUB_API_URL}`, { headers }).then(res => {
            const strDateTime: string = res.data.created_at
            const dateTimeObj = new Date(strDateTime)

            setName(res.data.name)
            setCreatedAt(dateTimeObj)
            setFollowers(res.data.followers)
        })
    }, [])

    const btnClick = () => {
        navigate('/contract')
    }

    return (
        <div className="github-ctn">
            <div>
                <Button type="primary" className="connect-btn" onClick={btnClick}>Connect</Button>
            </div>
            <div>
                <h3>Nuthapon Sripornprasert</h3>
                <p className="react-name">{name}</p>
                <p>Member since {createdAt.getFullYear()}</p>
                <p>Follower {followers} {followers>1? "people": "person"}</p>
            </div>
        </div>
    )
}

export default GithubAbout