import React from 'react';
import Image from "next/image";
import {useTranslations} from 'next-intl';

interface AboutProps {

    content: string;
}

const AboutSite = ({content}: AboutProps) => {
    return (
        <p className={"leading-6 text-justify indent-8 text-gray-5 "}>
            {content}
        </p>

    )
}

const About = () => {
    const t = useTranslations('About');
    return (
        <section className={"max-container  mt-16"}>
            <div className={"flex flex-row "}>
                <div className={"basis-1/2"}>
                    <h1 className={"text-[32px] text-green-10"}>{t('title')}</h1>
                    <p className={"text-[15px] leading-10 mb-4 text-blue-75"}>{t('subtitle')}</p>
                    <AboutSite content={t('content1')}></AboutSite>
                    <AboutSite content={t('content2')}></AboutSite>
                    <AboutSite content={t('content3')}></AboutSite>


                </div>
                <div className={"basis-1/2 flex justify-center mt-8  "}>
                    <Image src={"/company.jpg"} alt={"company"} width={"486"} height={"346"}
                           className={"rounded-2xl"}></Image>
                </div>
            </div>
        </section>
    );
};

export default About;