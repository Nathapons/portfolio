import { useState } from 'react';
import GitHubCalendar, { Activity } from "react-github-calendar";
import { Props } from '../interfaces/globalInterfaces';
import { ConfigProvider, Select, theme } from "antd";
import { motion } from "framer-motion"

const CARD_BG = '#22232a';
const CARD_BORDER = '#3a3b44';
const ACCENT = '#39d353';
const GREEN_SCALE = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

export default function Timeline({ isComp }: Props) {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(String(currentYear));
    const [totalCount, setTotalCount] = useState<number | null>(null);

    const handleYearChange = (year: string) => {
        setTotalCount(null);
        setSelectedYear(year);
    };

    const transformData = (data: Activity[]) => {
        setTotalCount(data.reduce((sum, activity) => sum + activity.count, 0));
        return data;
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex flex-col items-center">
            <div className="mb-8">
                <ConfigProvider
                    theme={{
                        algorithm: theme.darkAlgorithm,
                        token: { colorPrimary: ACCENT, borderRadius: 10 },
                    }}
                >
                    <Select
                        size='large'
                        value={selectedYear}
                        style={{ width: 120 }}
                        onChange={handleYearChange}
                        options={Array.from({ length: 5 }, (_, i) => {
                            return { value: String(currentYear - i), label: (currentYear - i).toString() }
                        })}
                    />
                </ConfigProvider>
            </div>

            <div
                className="w-full"
                style={{
                    maxWidth: 960,
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: 16,
                    padding: isComp ? '28px 32px' : '20px 16px',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                }}
            >
                <div style={{ fontSize: 15, fontWeight: 600, color: '#d9d9db', marginBottom: 18, minHeight: 21 }}>
                    {totalCount !== null ? `${totalCount} contributions in ${selectedYear}` : ' '}
                </div>

                <div style={{ overflowX: 'auto', paddingBottom: 6 }}>
                    <GitHubCalendar
                        username="Nathapons"
                        year={Number(selectedYear)}
                        transformData={transformData}
                        blockSize={isComp ? 12 : 10}
                        blockMargin={3}
                        fontSize={12}
                        colorScheme="dark"
                        theme={{ dark: GREEN_SCALE }}
                        hideTotalCount
                        labels={{ legend: { less: 'Less', more: 'More' } }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
