import React from 'react';
import ParticlesContainer from "@/constants/ParticlesContainer";
import Button from "@/components/Button";
import TypeWriteEffect from "@/constants/TypeWriteEffect";
import {SLOGAN} from "@/constants";


const Hero = () => {

    return (
        <section className={"bg-hero-bg  w-screen  h-[750px] bg-cover  "}>
            <ParticlesContainer></ParticlesContainer>

            <div className={"   flex  flex-col  justify-center  px-12 py-64   items-center relative "}>
                <h1 className={"text-5xl whitespace-pre-wrap  comfort text-green-10"}>This Is Freena</h1>
                <div className={"text-3xl whitespace-nowrap  comfort pt-10  text-gray-10 "}>
                    <TypeWriteEffect text={SLOGAN}></TypeWriteEffect>
                </div>
                <div className={"flex  grid-cols-1 gap-8  pt-10 "}>
                    <Button
                        type="button"
                        title="Contact Us"
                        variant="btn_dark_white"
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