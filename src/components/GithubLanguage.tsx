import { Col, Image, Row } from "antd";
import { Props } from "../interfaces/globalInterfaces";

export default function GithubLangauge({ isComp }: Props) {
    const githubLanguageUrl = 'https://github-readme-stats.vercel.app/api/top-langs/?username=Nathapons&layout=compact&theme=vision-friendly-dark&bg_color=171721&hide_border=true&title_color=fbbd23&text_color=c6c6c6'
    const githubStatUrl = 'https://github-readme-stats.vercel.app/api?username=Nathapons&show_icons=true&theme=vision-friendly-dark&bg_color=1a1b27&hide_border=true&title_color=fbbd23&text_color=c6c6c6'

    const urlItem = [
        {src: githubStatUrl, alt: "Github Language Stats"},
        {src: githubLanguageUrl, alt: "Github Stats"},
    ]

    return (
        <Row gutter={[2, 0]} className="mt-5">
            <Col span={24} className='flex justify-center'>
                {urlItem.map((item, index) => {
                    return (
                        <div>
                            <Image 
                                key={index} 
                                src={item.src} 
                                alt={item.alt} 
                                preview={false} 
                                width={450}
                                height={195}
                                className="flex justifly-center"
                            />
                        </div>
                    )
                })}
            </Col>
        </Row>
    )
}