import { useEffect, useState } from "react"
import { Button } from "antd"
import axios from "axios"

import styled from "styled-components"

const GithubDiv = styled.div`
    @media (max-width: 1051px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`


const GithubAbout = () => {
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

    const btnClick = () => {
        alert("Connect page is inprocess")
    }

    return (
        <GithubDiv>
            <div>
                <Button type="primary" onClick={btnClick}>Connect</Button>
            </div>
            <div>
                <h3>Nuthapon Sripornprasert</h3>
                <p className="react-name">{name}</p>
                <p>Member since {createdAt.getFullYear()}</p>
                <p>Follower {followers} {followers>1? "people": "person"}</p>
            </div>
        </GithubDiv>
    )
}

export default GithubAbout