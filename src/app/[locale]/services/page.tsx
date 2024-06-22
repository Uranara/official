import React, {ReactNode} from 'react';

import PageHeader from "../../../components/PageHeader";
import { Cpu, Leaf, Microscope, Radiation, Waves, Wind} from "lucide-react";
import Clients from '@/components/Clients';
import {useTranslations} from 'next-intl';

interface ServicePageProps {
    icon: ReactNode;
    title: string;
    text: string;
}

const ServicePageSite = ({icon,title,text}:ServicePageProps) => {
    return (
        <div className={"flex flex-col p-10 bg-gray-1 rounded-2xl text-center"}>
            <div className={"flex justify-center p-4"}>
                {icon}
            </div>
            <h1 className={"text-[24px] text-gray-5 mb-3"}>{title}</h1>
            <p className={"text-[15px] text-gray-5"}>
                {text}
            </p>
        </div>
        
    )
}

const Page = () => {
    const t = useTranslations('ServicePage');
    const keys = ['radiantPanel', 'freshAirSystem', 'centralControl','AerospaceGrade','NewCenter','Energy'] as const;
    const icons = {
        radiantPanel: <Radiation color="#46a96a" size={40} />,
        freshAirSystem: <Wind color="#46a96a" size={40} />,
        centralControl: <Cpu color="#46a96a" size={40} />,
        AerospaceGrade: <Microscope color="#46a96a" size={40} />,
        NewCenter: <Waves color="#46a96a" size={40} />,
        Energy: <Leaf color="#46a96a" size={40} />
    };
    return (
        <>
            <PageHeader title={t('title')}
                        subtitle={t('subtitle')}
                        href={"services"}/>
            <Clients></Clients>
            <div className={"my-10 mx-14"}>
                <div className={"grid grid-cols-3 gap-4"}>
                    {
                        keys.map((key,index) => (
                            <ServicePageSite key={index}
                                          icon={icons[key]}
                                          title={t(`${key}.title`)}
                                          text={t(`${key}.text`)}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Page;