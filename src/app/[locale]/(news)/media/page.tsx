import React from 'react';
import {useTranslations} from 'next-intl';
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Article from "@/components/Article";
const Page = () => {
    const t = useTranslations('MediaPage');
    const articleData ={
        content : [
            {type:"image",value:"/media1.jpeg"},
            {type:"paragraph",value:t('p1')},
            {type:"paragraph",value:t('p2')},
            {type:"paragraph",value:t('p3')},
            {type:"image",value:"/media2.jpeg"},
            {type:"paragraph",value:t('p4')},
            {type:"paragraph",value:t('p5')},
            {type:"image",value:"/media3.jpg"},

        ] as Array<{ type: "image" | "paragraph"; value: string }>
    }


    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"media"}/>

            <div className={" max-container padding-container "}>
                <Article title={t('title')} subtitle={t('text')} content={articleData.content} />
            </div>
            </>
    );
};

export default Page;