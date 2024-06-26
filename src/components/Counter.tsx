import React from 'react';
import {Clock, Layers, Trophy, Users} from "lucide-react";
import {useTranslations} from 'next-intl';

interface CounterProps {
    icon : React.ReactNode;
    num : number;
    subtitle: string;
}

const CounterSite = ({icon,num,subtitle}:CounterProps) => {

  return (
      <div className={"grid place-items-center grid-rows-3"}>
          {icon || <Layers color="#ffffff" size={40} />}
          <h1 className={"text-[32px]"}>{num}</h1>
          <p>{subtitle}</p>
      </div>
  )
}

const Counter = () => {
    const t = useTranslations('Counter');
    return (

        <div className={" relative overflow-hidden min-h-96  "}>
            <div className={"absolute bg-section bg-blend-color-dodge  w-screen  h-[300px] bg-cover bg-center  mb-36 mt-16  bg-fixed inset-0"}>
               <div className={"grid place-items-center grid-cols-3 gap-12 text-white h-full max-container"}>
                   <CounterSite icon={<Users color="#ffffff" size={40} />} num={123} subtitle={t('subtitle1')} />
                   <CounterSite icon={<Trophy color="#ffffff" size={40} />} num={12} subtitle={t('subtitle2')} />
                   <CounterSite icon={<Clock color="#ffffff" size={40} />} num={85} subtitle={t('subtitle3')} />
               </div>
            </div>
        </div>
    );
};

export default Counter;