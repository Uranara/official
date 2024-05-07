import React from 'react';
import ParticlesContainer from "@/constants/ParticlesContainer";
import Button from "@/components/Button";
import TypeWriteEffect from "@/components/TypeWriteEffect";


const Hero = () => {

    return (
        <section className={"bg-hero-bg  w-screen  h-[750px] bg-cover z-0 "}>
            <ParticlesContainer></ParticlesContainer>

            <div className={" bg-transparent  absolute top-32 left-1/4  px-12 py-32 z-10  w-1/2  flex  flex-col items-center "}>
                <h1 className={"text-5xl whitespace-pre-wrap  comfort text-green-10"}>This Is Freena</h1>
                <div className={"text-3xl whitespace-nowrap  comfort pt-10  text-gray-10 "}>
                    <TypeWriteEffect  text={["Global Leader Of Intelligent Indoor Micro Environment","lorem"]} ></TypeWriteEffect>
                </div>
                <div className={"flex  grid-cols-1 gap-8  pt-10 "}>
                    <Button
                        type="button"
                        title="Contact Us"
                        variant="btn_dark_green"
                    >
                    </Button>

                    <Button
                        type="button"
                        title="How Freena work ?"
                        variant="btn_dark_green"
                    >
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;