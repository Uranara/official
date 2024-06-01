import React from 'react';
import Link from "next/link";
import About from "../../../components/About";
import Idea from "../../../components/Idea";
import PageHeader from "../../../components/PageHeader";
import {useTranslations} from 'next-intl';


const Page = () => {
    const t = useTranslations('AboutPage');
    return (
            <>
                <PageHeader title={t('title')}
                            subtitle={t('subtitle')}
                            href={"about"}/>

                <About></About>
                <Idea></Idea>
            </>

    );
};

export default Page;