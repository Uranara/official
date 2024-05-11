import React, {ReactNode} from 'react';
import Image from "next/image";
import {BrainCog, Cog, FilePenLine} from "lucide-react";


interface IdeaProps {
    icon:  ReactNode,
    titles: string[],
    subtitle: string
}

const IdeaSite = ({icon, titles, subtitle}: IdeaProps) => {

    return (
        <div className={"flex flex-col bg-gray-1  py-3 px-1.5 rounded-lg mt-8 "}>
            <div className={"flex flex-row"}>
                <div className={"p-4"}>
                    {icon ||  <FilePenLine color="#46a96a" size={40}/>}
                </div>
                <div className={"flex flex-col"}>
                    <h1 className={"text-[1rem] text-gray-6 font-bold"}>
                        {titles[0]}, <span className={"text-green-10"}>{titles[1]}</span></h1>
                    <p className={"text-gray-5"}>{subtitle}</p>
                </div>
            </div>
        </div>
    )

}

const Idea = () => {
    return (
        <section className={"max-container  mt-16"}>
            <div className={"flex flex-row"}>
                <div className={"basis-1/2"}>
                    <Image src={"/idea.jpg"} alt={"idea"} width={542} height={442}/>
                </div>
                <div className={"basis-1/2"}>
                    <h1 className={"text-[32px] text-green-10"}>
                        Why Choose Us?
                    </h1>
                    <p className={"text-[15px]  text-blue-75 mb-8"}>
                        With the rapid development of technology and business, choosing the right partner is crucial for
                        your business success.</p>


                    <IdeaSite icon={ <FilePenLine color="#46a96a" size={40}/>}
                              titles={["Expertise","Experience"]}
                              subtitle={"Deep knowledge and skill in a particular area. Practical\n" +
                                  "                                    knowledge gained from work or other activities."} />

                    <IdeaSite icon={<BrainCog color="#46a96a" size={40} />}
                              titles={["Quality","Products"]}
                              subtitle={"A high standard of performance or excellence. Goods or services that are offered for sale."} />

                    <IdeaSite icon={<Cog color="#46a96a" size={40} />}
                              titles={["Timely","Delivery"]}
                              subtitle={"Done or happening at the right time. The act of handing over something to someone"} />


                </div>
            </div>
        </section>
    );
};

export default Idea;