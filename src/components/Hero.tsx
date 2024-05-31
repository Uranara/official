import React from 'react';
import ParticlesContainer from "@/constants/ParticlesContainer";
import Button from "@/components/Button";
import TypeWriteEffect from "@/constants/TypeWriteEffect";
import {SLOGAN} from "@/constants";
import {useTranslations} from 'next-intl';

const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <section className={"bg-hero  w-screen  h-[750px] bg-cover  "}>
            <ParticlesContainer></ParticlesContainer>

            <div className={"   flex  flex-col  justify-center  px-12 py-64   items-center relative "}>
                <h1 className={"text-5xl whitespace-pre-wrap  comfort text-green-10"}>{t('title')}</h1>
                <div className={"text-3xl whitespace-nowrap  comfort pt-10  text-gray-10 inline "}>
                    <TypeWriteEffect
                        text={SLOGAN}>
                    </TypeWriteEffect>
                </div>
                <div className={"flex  grid-cols-1 gap-8  pt-10 "}>
                    <Button
                        type="button"
                        title={t('buttonTitle1')}
                        variant="btn_dark_white"
                        href="/contact"
                    >
                    </Button>

                    <Button
                        type="button"
                        title={t('buttonTitle2')}
                        variant="btn_dark_green"
                        href="/about"
                    >
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;