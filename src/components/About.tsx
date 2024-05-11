import React from 'react';
import Image from "next/image";


interface AboutProps {

    content: string;
}

const AboutSite = ({content}: AboutProps) => {
    return (
        <p className={"leading-6 text-justify indent-8 text-gray-5 "}>
            {content}
        </p>

    )
}

const About = () => {
    return (
        <section className={"max-container  mt-16"}>
            <div className={"flex flex-row "}>
                <div className={"basis-1/2"}>
                    <h1 className={"text-[32px] text-green-10"}>About Our Company</h1>
                    <p className={"text-[15px] leading-10 mb-4 text-blue-75"}>We're Passionate About Helping Businesses
                        Thrive with Technology</p>
                    <AboutSite
                        content={"Freena technology is a high-teach company with a full capability of research & development ,\n" +
                            "                    manufacturing, selling and serving of five-constant intelligent air conditioners."}></AboutSite>

                    <AboutSite
                        content={"With the advantage of cutting-edge technologies, we have been the leader in the industry, and also\n" +
                            "                        the only one owned the whole set of core proprietary technologies for our self-invented products domestically."}></AboutSite>
                    <AboutSite
                        content={"  Owned by Freena technology , Freena is a brand name of the five-constant intelligent air conditioners ,\n" +
                            "                        which are praised and welcomed by the customers for their performance of constant temperature , humidity , oxygen\n" +
                            "                        level , cleanliness and quietness , while consuming 80% less energy than traditional air conditioners."}></AboutSite>


                </div>
                <div className={"basis-1/2 flex justify-center mt-8  "}>
                    <Image src={"/company.jpg"} alt={"company"} width={"486"} height={"346"}
                           className={"rounded-2xl"}></Image>
                </div>
            </div>
        </section>
    );
};

export default About;