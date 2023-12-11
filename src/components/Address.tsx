import { PiBuildings } from "react-icons/pi";
import { IoLocation } from "react-icons/io5";
import { TbMail } from "react-icons/tb";
import React from "react";

const Address: React.FC = () => {
    return (
        <div>
            <p><PiBuildings /> Swift Dynamics Co., Ltd.</p>
            <p><IoLocation /> Bangkok, Thailand</p>
            <p><TbMail /> nuthaponsri@gmail.com</p>
        </div>
    )
}

export default Address;
