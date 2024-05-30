import React from 'react';
import {Quote, Star, UserCheck} from "lucide-react";


interface TeamsProps {

    altText : string,
    name: string,
    text: string

}

const TeamsSite = ({ altText,name, text}: TeamsProps) => {
    return (

        <div className={"flex flex-col  w-[380px] "}>
            <div className={"flex flex-row"}>
                <UserCheck  size={40} color="#46a96a"/>
                <div className={"ml-4 flex flex-col justify-around"}>
                    <h1 className={"text-green-10 font-bold"}>{name}</h1>
                    <p className={"text-[#999999] text-[16px]"}>{altText.toUpperCase()}</p>
                    <div className={"flex flex-row"}>
                        {Array.from({length: 5}).map((_, index) => (
                            <Star color="#ffc107" size={16} key={index}/>
                        ))}
                    </div>
                </div>
            </div>

            <p className={"text-gray-5 py-10 px-5 bg-gray-1 shadow-box my-10 h-48  italic"}>
                <Quote className={"inline transform -scale-x-100 pr-1 mr-3"} size={24} color="#46a96a"/>
                {text}
                <Quote className={"inline pl-1 ml-3 "} size={24} color="#46a96a"/>
            </p>

        </div>
    )
}

const Clients = () => {
    return (
        <section className={"max-container mt-16 flex justify-center "}>
            <div>
                <div className={"text-center"}>
                    <h1 className={"text-[32px] text-green-10"}>Testimonials</h1>
                    <p className={"text-[15px] leading-10 mb-14 text-blue-75"}>Our testimonials are a testament to the
                        satisfaction of our clients</p>
                </div>

                <div className={"grid grid-cols-3 gap-4"}>

                    <TeamsSite
                               altText={"Decoration Workers"}
                               name={"Mr Bai"}
                               text={"The company is driven by core technology, led by advanced brands, and guided by\n" +
                                   "                                intelligent services."}/>

                    <TeamsSite

                        altText={"Villa Owner"}
                        name={"Jack"}
                        text={"Focusing on customers and technology, we are committed to becoming a global leader in\n" +
                            "                                indoor micro environment."}/>
                    <TeamsSite

                        altText={"Home Appliance Agents"}
                        name={"Dai Bright"}
                        text={"Innovation, integrity, pragmatism, passion."}/>

                </div>
            </div>
            <div>
            </div>
        </section>
    );
};

export default Clients;