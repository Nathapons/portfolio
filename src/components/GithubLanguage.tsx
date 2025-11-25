import { Col, Image, Row } from "antd";
import { Props } from "../interfaces/globalInterfaces";
import { motion } from "framer-motion";

export default function GithubLangauge({ isComp }: Props) {
    const githubLanguageUrl = 'https://github-readme-stats.vercel.app/api/top-langs/?username=Nathapons&layout=compact&theme=vision-friendly-dark&bg_color=171721&hide_border=true&title_color=fbbd23&text_color=c6c6c6'
    const githubStatUrl = 'https://github-readme-stats.vercel.app/api?username=Nathapons&show_icons=true&theme=vision-friendly-dark&bg_color=1a1b27&hide_border=true&title_color=fbbd23&text_color=c6c6c6'

    const urlItem = [
        {src: githubStatUrl, alt: "Github Language Stats"},
        {src: githubLanguageUrl, alt: "Github Stats"},
    ]

    return (
        <Row gutter={[0, 2]} className="p-2">
            {urlItem.map((item, index) => {
                return (
                    <Col xl={12} xxl={12} lg={12} md={24} sm={24} xs={24} className='flex justify-center'>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                            <Image 
                                draggable={false}
                                key={index} 
                                src={item.src} 
                                alt={item.alt} 
                                preview={false} 
                                width={(isComp)? 450: 380}
                                height={200}
                            />
                        </motion.div>
                    </Col>
                )
            })}
        </Row>
    )
}