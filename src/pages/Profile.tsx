import MyPic from "../components/MyPic";
import Address from "../components/Address";
import '../styles/Profile.css'
import GithubAbout from "../components/GithubAbout";
import TechStack from "../components/TechStack";

const Profile = () => {
    const img: string = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1702219598/upload/urjpebrhv9gabuqv10r6.jpg"
    const classname: string = "my-profile2"

    return (
        <div className="profile-box">
            <MyPic img={img} classname={classname} />
            <GithubAbout />
            <Address />
            <TechStack />
        </div>
    )
}

export default Profile;