import { useState } from 'react';
import GitHubCalendar from "react-github-calendar";
import { Props } from '../interfaces/globalInterfaces';
import { Col, Row, Typography } from "antd";
import { Select } from 'antd';
import { motion } from "framer-motion"

const { Paragraph } = Typography;

export default function Timeline({ isComp }: Props) {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(String(currentYear));

    const handleYearChange = (year: string) => {
        setSelectedYear(year);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Row className='text-center mb-6' gutter={[8, 8]}>
                <Col span={24} className='text-center'>
                    <Select
                        size='large'
                        defaultValue={selectedYear}
                        style={{ width: 120 }}
                        onChange={handleYearChange}
                        options={Array.from({ length: 5 }, (_, i) => {
                            return {value: currentYear - i, label: (currentYear - i).toString()}
                        })}
                    />
                </Col>
            </Row>
            <Row className='flex justify-center'>
                <Col span={24} className='p-8 bg-card rounded-lg border-2 border-solid border-white w-full max-w-4xl'>
                    <GitHubCalendar
                        username="Nathapons"
                        year={Number(selectedYear)}
                        blockSize={16}
                        blockMargin={4}
                        fontSize={16}
                        theme={{
                            light: ['hsl(0, 0%, 92%)', 'hsl(60, 95%, 80%)', 'hsl(60, 95%, 70%)', 'hsl(60, 95%, 60%)', 'hsl(60, 95%, 50%)'],
                            dark: ['hsl(0, 0%, 20%)', 'hsl(60, 95%, 30%)', 'hsl(60, 95%, 40%)', 'hsl(60, 95%, 50%)', 'hsl(60, 95%, 60%)'],
                        }}
                        hideColorLegend
                        hideTotalCount
                    />
                </Col>
            </Row>
        </motion.div>
    );
}