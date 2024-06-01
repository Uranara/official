import React from 'react';
import Link from "next/link";
import PageHeader from "../../../components/PageHeader";
import {useTranslations} from 'next-intl';
const Page = () => {
    const t = useTranslations('ContactPage');
    return (
       <>
        <PageHeader title={t('title')}
                    subtitle={t('subtitle')}
                    href={"contact"}/>
           <div className={""}>

           </div>
       </>
    );
};

export default Page;