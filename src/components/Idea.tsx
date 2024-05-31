import React, {ReactNode} from 'react';
import Image from "next/image";
import {BrainCog, Cog, FilePenLine} from "lucide-react";
import {useTranslations} from 'next-intl';

interface IdeaProps {
    icon: ReactNode,
    label1: string,
    label2: string,
    content: string,

}

const IdeaSite = ({icon, label1, label2, content}: IdeaProps) => {

    return (
        <div className={"flex flex-col bg-gray-1  py-3 px-1.5 rounded-lg mt-8 "}>
            <div className={"flex flex-row"}>
                <div className={"p-4"}>
                    {icon || <FilePenLine color="#46a96a" size={40}/>}
                </div>
                <div className={"flex flex-col"}>
                    <h1 className={"text-[1rem] text-gray-6 font-bold"}>
                        {label1}, <span className={"text-green-10"}> {label2}</span></h1>
                    <p className={"text-gray-5"}>{content}</p>
                </div>
            </div>
        </div>
    )

}

const Idea = () => {
    const t = useTranslations('Idea');
    return (
        <section className={"max-container  mt-16"}>
            <div className={"flex flex-row"}>
                <div className={"basis-1/2"}>
                    <Image src={"/idea.jpg"} alt={"idea"} width={542} height={442}/>
                </div>
                <div className={"basis-1/2"}>
                    <h1 className={"text-[32px] text-green-10"}>
                        {t('title')}
                    </h1>
                    <p className={"text-[15px]  text-blue-75 mb-8"}>{t('subtitle')}</p>


                    <IdeaSite icon={<FilePenLine color="#46a96a" size={40}/>}
                              label1={t('label1')}
                              label2={t('label2')}
                              content={t('content1')}
                    />

                    <IdeaSite icon={<BrainCog color="#46a96a" size={40}/>}
                              label1={t('label3')}
                              label2={t('label4')}
                              content={t('content2')}
                    />

                    <IdeaSite icon={<Cog color="#46a96a" size={40}/>}
                              label1={t('label5')}
                              label2={t('label6')}
                              content={t('content3')}

                    />

                </div>
            </div>
        </section>
    );
};

export default Idea;