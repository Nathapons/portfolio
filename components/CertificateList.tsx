import { Props } from "@/interfaces/globalInterfaces";
import { Col, ConfigProvider, Image, Row } from "antd";
import { useEffect, useState } from "react";


interface CertificateData {
    url: string
    alt: string
}

const CertificateList = ({ isComp }: Props) => {
    const [certificates, setCertificates] = useState<CertificateData[]>([]);

    useEffect(() => {
        fetch('/api/v1/certificate')
        .then((response => response.json()))
        .then((data: CertificateData[]) => {
            setCertificates(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
    }, [])

    return (
        <ConfigProvider>
            <Row gutter={isComp? [30, 30]: [20, 20]} justify="center" align="middle" style={{paddingBottom: '20px'}}>
                {certificates.map((certificate, index) => (
                    <Col key={index} flex="none" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                        <Image src={certificate.url} alt={certificate.alt} width={isComp? 500: 350}/>
                    </Col>
                ))}
            </Row>
        </ConfigProvider>
    )
}

export default CertificateList;