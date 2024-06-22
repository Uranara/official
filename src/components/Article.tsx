import React from 'react';
import Image from "next/image";


interface ArticleProps {
    title:string;
    subtitle:string;
    content:Array<{type:"image" | "paragraph"; value:string}>

}
const Article = ({title,subtitle,content}:ArticleProps) => {
    return (
        <div
            className={"bg-white mt-10 mb-10 p-8 shadow-xl text-slate-700 overflow-auto text-sm leading-6 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400"}>
            <div className={"whitespace-normal"}>
                <h1 className={"text-[32px] text-green-10"}>{title}</h1>
                <p className={"text-[15px] leading-10 mb-2 text-blue-75"}>
                    {subtitle}
                </p>

                {content.map((item,index) =>{
                        if(item.type === "image"){
                            return  <div key={index} className={"flex justify-center pt-10 pb-10"}>
                                        <Image src={item.value} alt={"image"} width={"800"} height={"600"}
                                       className={"rounded-2xl"}></Image>
                                     </div>
                        }
                        else if (item.type === "paragraph") {
                            return   <p key={index} className={"leading-6 text-justify indent-8 text-gray-5 mt-4 "}>
                                {item.value}
                                    </p>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Article;