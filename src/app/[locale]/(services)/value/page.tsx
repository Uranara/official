import React from 'react';
import PageHeader from "@/components/PageHeader";
import {useTranslations} from 'next-intl';
import Article from "@/components/Article";
const Page = () => {
    const t = useTranslations('ValuePage');
    const articleData1 ={
        content : [
            {type:"paragraph",value:t('radiantPanel.p1')},
            {type:"paragraph",value:t('radiantPanel.p2')},
            {type:"paragraph",value:t('radiantPanel.p3')},
            {type:"image",value:"/panel.png"},

        ] as Array<{ type: "image" | "paragraph"; value: string }>
    }
    const articleData2 ={
        content : [
            {type:"paragraph",value:t('freshAirSystem.p1')},
            {type:"paragraph",value:t('freshAirSystem.p2')},
            {type:"paragraph",value:t('freshAirSystem.p3')},
            {type:"paragraph",value:t('freshAirSystem.p4')},
            {type:"paragraph",value:t('freshAirSystem.p5')},
            {type:"image",value:"/air.jpg"},

        ] as Array<{ type: "image" | "paragraph"; value: string }>
    }
    const articleData3 ={
        content : [
            {type:"paragraph",value:t('centralControl.p1')},
            {type:"paragraph",value:t('centralControl.p2')},
            {type:"paragraph",value:t('centralControl.p3')},
            {type:"image",value:"/system.jpg"},

        ] as Array<{ type: "image" | "paragraph"; value: string }>
    }

    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"value"}/>

            <div className={" max-container padding-container "}>
                <Article title={t('radiantPanel.title')} subtitle={t('radiantPanel.text')} content={articleData1.content} />
                <Article title={t('freshAirSystem.title')} subtitle={t('freshAirSystem.text')} content={articleData2.content} />
                <Article title={t('centralControl.title')} subtitle={t('centralControl.text')} content={articleData3.content} />
            </div>
        </>
    );
};

export default Page;