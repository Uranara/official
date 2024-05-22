import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Blogs = () => {
    return (
        <section className={"max-container mt-16 flex justify-center "}>
                <div>
                    <div className={"text-center"}>
                        <h1 className={"text-[32px] text-green-10"}>Blogs</h1>
                        <p className={"text-[15px] leading-10 mb-14 text-blue-75"}>Our latest blog posts, featuring images and videos to enhance your reading experience</p>
                    </div>
                    <div  className={"grid grid-cols-3 gap-4"}>

                        <article>
                            <Image className={"rounded-2xl" }  src={"/work1.jpg"} alt={"work1"} width={380} height={240}/>
                            <div className={"w-[380px] bg-gray-2"}>
                                <h1 className={"text-[16px] text-gray-8"}>Sales Department</h1>
                                <Link href={"#"} className={"text-green-10 text-[22px] "}>How to host website on any hosting provider?</Link>
                                <div className={"flex justify-between"}>
                                    <span className={"font-[15px] text-gray-6"}>William Smith</span>
                                    <span className={"font-[14px] text-gray-3"}>Feb 1,2022</span>
                                </div>
                                <hr/>
                                <p className={"font-[15px] text-gray-6"}>
                                    To host a website on any hosting provider, you need to follow these steps: 1 Choose a hosting provider and sign up for a hosting plan.
                                </p>
                            </div>
                        </article>

                        <div>
                            <div>poster1</div>
                            <div>
                                <h1>department</h1>
                                <div>link</div>
                                <div>
                                    <h1>writer</h1>
                                    <span>date</span>
                                </div>
                                <p>
                                    To host a website on any hosting provider, you need to follow these steps: 1 Choose a hosting provider and sign up for a hosting plan.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

        </section>
                );
};

export default Blogs;