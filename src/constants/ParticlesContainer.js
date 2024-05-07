
"use client"
import {initParticlesEngine, Particles} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import React, {useCallback, useEffect, useState} from "react";


const ParticlesContainer = () => {
    const [ init, setInit ] = useState(false);
    useEffect(() =>{
            initParticlesEngine(async  (engine) => {
                await loadFull(engine);
            }).then(()=>{
                setInit(true)
            });
    },[])

    const particlesLoaded = useCallback(async () => {
    }, [])

    return <Particles className={"w-screen h-full absolute  "} id={"particles"}
                      particlesLoaded={particlesLoaded} options={
        {
            fullScreen: {enable: false},
            background: {
                color: {
                    value: ""
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 90,

                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },

                },
            },
            particles: {
                color: {
                    value: "#f5f5f5",

                },
                links: {
                    color: "#eee",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1
                },

                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: false,
                    speed: 4,
                    straight: false,

                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },

                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",

                },

                size: {
                    value: {min: 1, max: 60}
                },
            },
            detectRetina: true

        }
    }></Particles>
}


export default ParticlesContainer