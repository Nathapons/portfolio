import React, { useEffect, useState } from 'react';
import { ConfigProvider, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import { MenuItemProps } from '../interfaces/globalInterfaces';

interface Props {
    menu: MenuItemProps[];
}

const { Title } = Typography;

const Navbar: React.FC<Props> = ({ menu }) => {
    const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsComp(window.innerWidth > 1050);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Row style={{justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#31323a'}}>
            <Link to="/">
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSizeHeading2: (isComp ? 30 : 24)
                        },
                        components: {
                            Typography: {
                                titleMarginBottom: 0,
                                titleMarginTop: 0
                            },
                        }
                    }}
                >
                    <Title level={2} style={{ textAlign: 'center', border: '1px solid white', padding: '5px'}}>Nuthapon.S</Title>
                </ConfigProvider>
            </Link>
            {isComp ? <MenuBar /> : <MenuButton menu={menu} />}
        </Row>
    );
};

export default Navbar;
