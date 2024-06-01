import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from 'next-intl';

interface BlogsProps {
    imageSrc: string,
    department: string,
    title: string,
    author: string,
    date: string,
    text: string
}

const BlogsSite = ({imageSrc, department, title, author, date, text}: BlogsProps) => {
    return (
        <article>
            <Image className={"rounded-t-2xl"} src={imageSrc} alt={"work1"} width={380} height={240}/>
            <div className={"w-[380px] bg-gray-2 p-8 rounded-b-2xl"}>
                <h1 className={"text-[16px] text-gray-8"}>{department}</h1>
                <Link href={"#"} className={"text-green-10 text-[22px] hover:underline"}>{title}</Link>
                <div className={"flex justify-between  border-b "}>
                    <span className={"text-[15px] text-gray-6 mb-3"}>{author}</span>
                    <span className={"text-[14px] text-gray-3"}>{date}</span>
                </div>

                <p className={"text-[15px] text-gray-6 mt-3"}>
                    {text}
                </p>
            </div>
        </article>
    )

}
const Blogs = () => {
    const t = useTranslations('Blogs');
    return (
        <section className={"max-container mt-16 flex justify-center "}>
            <div>
                <div className={"text-center"}>
                    <h1 className={"text-[32px] text-green-10"}>{t('title')}</h1>
                    <p className={"text-[15px] leading-10 mb-14 text-blue-75"}>{t('subtitle')}</p>
                </div>
                <div className={"grid grid-cols-3 gap-4"}>

                    <BlogsSite imageSrc={"/work1.jpg"}
                               department={t('department1')}
                               title={t('title1')}
                               author={"William Smith"}
                               date={"Feb 1,2022"}
                               text={t('text1')} />
                    <BlogsSite imageSrc={"/work2.jpg"}
                               department={t('department2')}
                               title={t('title2')}
                               author={"Ana Will"}
                               date={"Oct 5, 2022"}
                               text={t('text2')}  />
                    <BlogsSite imageSrc={"/work3.jpg"}
                               department={t('department3')}
                               title={t('title2')}
                               author={"Joni"}
                               date={"Dec 22, 2022"}
                               text={t('text3')}/>

                </div>
            </div>

        </section>
    );
};

export default Blogs;