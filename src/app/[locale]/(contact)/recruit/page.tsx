import React from 'react';
import {useTranslations} from 'next-intl';
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
const Page = () => {
    const t = useTranslations('RecruitPage');
    return (
       <>
           <PageHeader title={t('title')}
                       subtitle={t('subtitle')}
                       href={"recruit"}/>

           <div className={"m-10"}>
               <div className={"grid grid-rows-2 grid-flow-col gap-4"}>
                   <div className={"row-span-2 p-4 rounded-lg shadow-lg bg-gray-2 "}>
                       <div>
                           <h1 className={"text-green-10 capitalize mb-3 text-[18px]"}>{t('label1')}</h1>
                           <p className={"text-gray-7  text-[14px] font-medium mb-2"}>{t('name1')}</p>
                       </div>
                   </div>
                   <div className={"col-span-2 p-4 rounded-lg shadow-lg bg-gray-2"}>
                       <div className={"flex flex-row "}>

                           <input type="text" placeholder={t('placeholder1')} className="block py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg "/>
                           <input type="text" placeholder={t('placeholder2')} className="block py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg ml-8"/>
                       </div>
                       <div className={"w-full"}>
                           <input type="text" placeholder={t('placeholder3')} className="mt-10 py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-lg "/>

                       </div>
                   </div>
                   <div className={"flex flex-row row-span-2 col-span-2 rounded-lg shadow-lg bg-gray-2"}>

                       <div className={"m-20"}>
                           <Button
                               type="button"
                               title={t('buttonText')}
                               variant="btn_dark_green"
                               href={"/recruit"}
                           >
                           </Button>
                       </div>
                   </div>
               </div>
               <div>
               </div>
           </div>
       </>
    );
};

export default Page;