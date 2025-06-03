import React, { useEffect, useState } from "react";
import { Col, ConfigProvider, Image, Row } from "antd";
import { Props } from "../interfaces/globalInterfaces";
import certificateData from "../data/Certificate.json";
import { CertificateItem } from "../interfaces/globalInterfaces";

const CertificateList: React.FC<Props> = ({ isComp }) => {
    const [certificates, setCertificates] = useState<CertificateItem[]>([]);

    useEffect(() => {
        // In React, we'll use the imported JSON directly instead of fetching
        setCertificates(certificateData);
    }, []);

    return (
        <ConfigProvider>
            <Row gutter={isComp ? [30, 30] : [20, 20]} justify="center" align="middle" style={{paddingBottom: '20px'}}>
                {certificates.map((certificate, index) => (
                    <Col key={index} flex="none" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                        <Image src={certificate.url} alt={certificate.alt} width={300}/>
                    </Col>
                ))}
            </Row>
        </ConfigProvider>
    );
};

export default CertificateList;
