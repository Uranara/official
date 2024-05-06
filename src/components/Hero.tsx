import React from 'react';
import ParticlesContainer from "@/constants/ParticlesContainer";


const Hero = () => {

    return (
        <section className={"bg-hero-bg  w-screen  h-lvh bg-cover z-0 "}>
            <ParticlesContainer></ParticlesContainer>

            <div className={" bg-slate-100  absolute top-32 left-1/3  px-12 py-32 z-10 flex  flex-col items-center "}>
                <h1 className={"text-4xl font-Comfort "}>This Is Freena</h1>
                <p className={"text-2xl text-wrap "}>
                    Global Leader Of Intelligent Indoor Micro Environment
                </p>

            </div>


        </section>
    );
};

export default Hero;