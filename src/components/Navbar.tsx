import React, { useEffect, useState } from 'react';
import { ConfigProvider, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';


const { Title } = Typography;

const Navbar: React.FC = () => {
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
        <Row className={isComp? "flex justify-center items-center p-[10px] bg-[#31323a]": "flex justify-between items-center p-[10px] bg-[#31323a]"}>
            {!isComp && (
                <Link to="/" className="text-2xl text-white">
                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: 'white',
                                fontSizeHeading2: 24
                            },
                            components: {
                                Typography: {
                                    titleMarginBottom: 0,
                                    titleMarginTop: 0
                                },
                            }
                        }}
                    >
                        <Title level={2} className="border border-white p-[5px] mt-0 mb-0">Nuthapon.S</Title>
                    </ConfigProvider>
                </Link>
            )}
            {isComp ? <MenuBar /> : <MenuButton />}
        </Row>
    );
};

export default Navbar;
