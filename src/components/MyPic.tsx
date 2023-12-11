import React from 'react'
import '../styles/MyPic.css'

interface Props {
    img: string
    classname: string
}

const MyPic: React.FC = ({img, classname}: Props) => {
    return (
        <img src={img} alt="My profile" className={classname} />
    )
}

export default MyPic;