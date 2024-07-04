import React from 'react';
import {useTranslations} from "next-intl";
import PageHeader from "@/components/PageHeader";
import Article from "@/components/Article";

const Page = () => {
    const t = useTranslations('NewsPage');
    const articleData = {
        content: [
            {type: "image", value: "/photo4.png"},
            {type: "paragraph", value: t('p1')},
            {type: "paragraph", value: t('p2')},
            {type: "image", value: "/photo1.png"},
            {type: "paragraph", value: t('p3')},
            {type: "paragraph", value: t('p4')},
            {type: "image", value: "/photo2.png"},

        ] as Array<{ type: "image" | "paragraph"; value: string }>
    }
    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"news"}/>

            <div className={" max-container padding-container "}>
                <Article title={t('title')} subtitle={t('text')} content={articleData.content} />
            </div>
        </>
    );
};

export default Page;