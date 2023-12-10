import React, { useEffect, useState } from "react"
import { Button } from "antd"
import axios from "axios"


const GithubAbout: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [createdAt, setCreatedAt] = useState<Date>(new Date());
    const [followers, setFollowers] = useState<number>(0);

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

    return (
        <div>
            <Button type="primary" className="connect-btn">Connect</Button>
            <h3>Nuthapon Sripornprasert</h3>
            <p className="react-name">{name}</p>
            <p>Member since {createdAt.getFullYear()}</p>
            <p>Follower {followers} {followers>1? "people": "person"}</p>
        </div>
    )
}

export default GithubAbout