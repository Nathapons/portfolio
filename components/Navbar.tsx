import { Row } from 'antd';
import Link from 'next/link'
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import { useEffect, useState } from 'react';
import { Typography } from 'antd';


interface Props {
    menu: any;
}

const { Title } = Typography;

const Navbar = ({ menu }: Props) => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        setIsMobile(window.innerWidth > 1050)
    }, [])

    return (
        <Row style={{justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#31323a', color: 'white'}}>
            <Link href="/" style={{textDecoration: "none"}}>
                <Title level={isMobile? 2: 3} style={{ margin: 0, textAlign: 'center', border: '1px solid white', padding: '5px', color: 'white' }}>Nuthapon.S</Title>
            </Link>
            {isMobile? <MenuBar />: <MenuButton menu={menu}/>}
        </Row>
    )
}

export default Navbar;