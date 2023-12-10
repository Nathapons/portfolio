import '../styles/MyPic.css'

interface Props {
    img: string
    classname: string
}

const MyPic = ({img, classname}: Props) => {
    return (
        <img src={img} alt="My profile" className={classname} />
    )
}

export default MyPic;