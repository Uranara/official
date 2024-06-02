import React, {ReactNode} from 'react';
import {Atom, Cpu, Radiation, Wind} from "lucide-react";
import {useTranslations} from 'next-intl';

interface FeaturesProps {
    icon: ReactNode;
    title: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
}

const FeaturesSite = ({icon, title, subtitle1, subtitle2, subtitle3}: FeaturesProps) => {
    return (
        <div className={"bg-gray-1  p-20 mt-16  "}>
            <div className={"flex justify-center"}>
                {icon || <Atom color="#46a96a" size={40}/>}
            </div>
            <h1 className={"text-3xl line-clamp-1 leading-normal"}>{title}</h1>

            <p className={"leading-6"}>{subtitle1}</p>
            <p className={"leading-6"}>{subtitle2}</p>
            <p className={"leading-6"}>{subtitle3}</p>
        </div>
    )
}

const Features = () => {
    const t = useTranslations('Features');
    const keys = ['radiantPanel', 'freshAirSystem', 'centralControl'] as const;
    const icons = {
        radiantPanel: <Radiation color="#46a96a" size={40} />,
        freshAirSystem: <Wind color="#46a96a" size={40} />,
        centralControl: <Cpu color="#46a96a" size={40} />

    };
    return (
        <section className={"grid grid-cols-3 gap-2  text-center text-gray-5 max-container"}>
            {
                keys.map((key,index) => (
                    <FeaturesSite key={index}
                                  icon={icons[key]}
                                  title={t(`${key}.title`)}
                                  subtitle1={t(`${key}.subtitles1`)}
                                  subtitle2={t(`${key}.subtitles2`)}
                                  subtitle3={t(`${key}.subtitles3`)}
                    />
                ))
            }
        </section>
    );
};

export default Features;