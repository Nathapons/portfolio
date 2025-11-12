import React, { useEffect, useState } from "react";
import { Col, Row, Card, Modal, Typography, Image } from "antd";
import { Props } from "../interfaces/globalInterfaces";
import certificateData from "../data/Certificate.json";
import { CertificateItem } from "../interfaces/globalInterfaces";
import { ZoomInOutlined, CloseOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { Title, Text } = Typography;
const { Meta } = Card;

const CertificateList: React.FC<Props> = ({ isComp }) => {
    const [certificates, setCertificates] = useState<CertificateItem[]>([]);
    const [selectedCert, setSelectedCert] = useState<any>(null)
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        setCertificates(certificateData);
    }, []);

    const openModal = (cert: any) => {
        setSelectedCert(cert)
        setRotation(0)
    }

    const closeModal = () => {
        setSelectedCert(null)
        setRotation(0)
    }

    return (
        <div className="max-w-7xl mx-auto">
            <Row gutter={[24, 24]} className="max-w-7xl mx-auto">
                {certificates.map((cert, index) => (
                    <Col xs={24} sm={12} lg={6} key={cert.id}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Card
                            hoverable
                            className="bg-gray-200 border-none"
                            cover={
                                <Row>
                                    <Col xs={24} sm={24} lg={24} className="flex justify-center">
                                        <Image
                                            alt={cert.title}
                                            src={cert.imageUrl || "/placeholder.svg"}
                                            height={200}
                                            
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center">
                                            <ZoomInOutlined
                                                className="text-white text-2xl opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                                                onClick={() => openModal(cert)}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            }
                            onClick={() => openModal(cert)}
                        >
                            <Meta
                                title={<Title level={5} className="text-wrap text-center">{cert.title}</Title>}
                                className="h-[50px]"
                            />
                        </Card>
                    </motion.div>
                    </Col>
                ))}
            </Row>

            <Modal
                open={!!selectedCert}
                onCancel={closeModal}
                footer={null}
                width="90vw"
                style={{ maxWidth: "1000px" }}
                centered
                closeIcon={<CloseOutlined className="text-white text-xl" />}
                styles={{
                    mask: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
                    content: { backgroundColor: "transparent", boxShadow: "none" },
                }}
            >
            {selectedCert && (
                <div className="text-center">
                    <div className="flex justify-center">
                        <img
                            src={selectedCert.imageUrl || "/placeholder.svg"}
                            alt={selectedCert.title}
                            className="max-w-full max-h-[70vh] object-contain transition-transform duration-300"
                            style={{ transform: `rotate(${rotation}deg)` }}
                        />
                    </div>
                    <div className="mt-4 text-white text-center">
                        <h3 className="text-xl font-bold mb-2">{selectedCert.title}</h3>
                        <p className="text-lg">{selectedCert.issuer}</p>
                        <p className="text-sm opacity-80">{selectedCert.date}</p>
                    </div>
                </div>
            )}
            </Modal>
        </div>
    );
};

export default CertificateList;
