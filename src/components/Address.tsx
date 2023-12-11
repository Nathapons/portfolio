import { PiBuildings } from "react-icons/pi";
import { IoLocation } from "react-icons/io5";
import { TbMail } from "react-icons/tb";

const Address = () => {
    return (
        <>
            <h3>Status</h3>
            <p><PiBuildings /> Swift Dynamics Co., Ltd.</p>
            <p><IoLocation /> Bangkok, Thailand</p>
            <p><TbMail /> nuthaponsri@gmail.com</p>
        </>
    )
}

export default Address;
