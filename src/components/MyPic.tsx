import React from 'react';
import '../styles/MyPic.css'

const MyPic = () => {
    const my_profile: string = 'https://res.cloudinary.com/dizcg5fnc/image/upload/v1701619719/upload/kqc8rgleicctewcci0cv.jpg'
    return (
        <img src={my_profile} alt="My profile" className="my-profile" />
    )
}

export default MyPic;