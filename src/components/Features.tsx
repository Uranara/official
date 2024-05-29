import React, {ReactNode} from 'react';
import {Airplay, Atom, Radiation, Wind} from "lucide-react";

interface FeaturesProps {
    icon: ReactNode;
    title: string;
    subtitle: string[];
}

const FeaturesSite = ({icon, title, subtitle}: FeaturesProps) => {
    return(
        <div className={"bg-gray-1  p-20 mt-16  "}>
            <div className={"flex justify-center"}>
                {icon || <Atom  color="#46a96a" size={40} />}
            </div>
            <h1 className={"text-3xl line-clamp-1 leading-normal"}>{title}</h1>
            {
                subtitle.map((label,index)=>(
                    <p className={"leading-6"} key={index}>{label}</p>
                ))
            }

        </div>
    )
}

const Features = () => {
    return (
        <section className={"grid grid-cols-3 gap-2  text-center text-gray-5 max-container"}>

            <FeaturesSite icon={<Radiation color="#46a96a" size={40}/>}
                          title={"Radiant Panel Technology"}
                          subtitle={["Effective Insulation","Precise Temperature Control","Easy To Install"]} />

            <FeaturesSite icon={<Wind color="#46a96a" size={40} />}
                          title={"Fresh Air System Equipped"}
                          subtitle={["Full Air Replacement","Air Quality Control","Precise Control Of Humidity And Temperature"]} />

            <FeaturesSite icon={<Airplay color="#46a96a" size={40} />}
                          title={"Central Control System"}
                          subtitle={["High Accuracy Sensor","Central Processing Unit","Stable Operation"]} />

        </section>

    );
};

export default Features;