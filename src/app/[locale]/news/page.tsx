import React from 'react';
import Link from "next/link";
import PageHeader from "../../../components/PageHeader";
import Blogs from "../../../components/Blogs";
import {useTranslations} from 'next-intl';

const Page = () => {
    const t = useTranslations('NewsPage');

    return (
       <>
       <PageHeader title={t('title')}
                   subtitle={t('subtitle')}
                   href={"news"}/>

           <Blogs></Blogs>

       </>
    );
};

export default Page;