import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface BlogsProps {
    imageSrc: string,
    department: string,
    title: string,
    author: string,
    date: string,
    text: string
}

const BlogsSite = ({imageSrc, department, title, author, date, text}: BlogsProps) => {

    return (
        <article>
            <Image className={"rounded-t-2xl"} src={imageSrc} alt={"work1"} width={380} height={240}/>
            <div className={"w-[380px] bg-gray-2 p-8 rounded-b-2xl"}>
                <h1 className={"text-[16px] text-gray-8"}>{department}</h1>
                <Link href={"#"} className={"text-green-10 text-[22px] hover:underline"}>{title}</Link>
                <div className={"flex justify-between  border-b "}>
                    <span className={"text-[15px] text-gray-6 mb-3"}>{author}</span>
                    <span className={"text-[14px] text-gray-3"}>{date}</span>
                </div>

                <p className={"text-[15px] text-gray-6 mt-3"}>
                    {text}
                </p>
            </div>
        </article>
    )

}
const Blogs = () => {
    return (
        <section className={"max-container mt-16 flex justify-center "}>
            <div>
                <div className={"text-center"}>
                    <h1 className={"text-[32px] text-green-10"}>Blogs</h1>
                    <p className={"text-[15px] leading-10 mb-14 text-blue-75"}>Our latest blog posts, featuring images
                        and videos to enhance your reading experience</p>
                </div>
                <div className={"grid grid-cols-3 gap-4"}>

                    <BlogsSite imageSrc={"/work1.jpg"}
                               department={"Sales Department"}
                               title={"How to host website on any hosting provider?"}
                               author={"William Smith"}
                               date={"Feb 1,2022"}
                               text={"To host a website on any hosting provider, you need to follow these steps: 1 Choose a\n" +
                                   "                                hosting provider and sign up for a hosting plan."} />
                    <BlogsSite imageSrc={"/work2.jpg"}
                               department={"Brand Department"}
                               title={"How to create add on google adwords?"}
                               author={"Ana Will"}
                               date={"Oct 5, 2022"}
                               text={"Google AdWords add-ons are third-party tools and services that can extend the functionality of the AdWords platform. They can help you"} />
                    <BlogsSite imageSrc={"/work3.jpg"}
                               department={"Marketing Department"}
                               title={"What is digital marketing and why is important?"}
                               author={"Joni"}
                               date={"Dec 22, 2022"}
                               text={"Digital marketing is the use of digital channels to promote or market products or services to consumers and businesses. It includes a wide"}/>

                </div>
            </div>

        </section>
    );
};

export default Blogs;