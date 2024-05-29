import React from 'react';
import {Clock, Layers, Trophy, Users} from "lucide-react";


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
    return (

        <div className={" relative overflow-hidden min-h-96  "}>
            <div className={"absolute bg-section bg-blend-color-dodge  w-screen  h-[300px] bg-cover bg-center  mb-36 mt-16  bg-fixed inset-0"}>
               <div className={"grid place-items-center grid-cols-3 gap-12 text-white h-full max-container"}>
                   <CounterSite icon={<Users color="#ffffff" size={40} />} num={231} subtitle={"Happy Clients"} />
                   <CounterSite icon={<Trophy color="#ffffff" size={40} />} num={521} subtitle={"Completed Projects"} />
                   <CounterSite icon={<Clock color="#ffffff" size={40} />} num={453} subtitle={"Hours Of Support"} />
               </div>
            </div>
        </div>
    );
};

export default Counter;