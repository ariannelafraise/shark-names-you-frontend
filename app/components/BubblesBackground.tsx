"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode
} from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // might be good to switch to slim (lighter version?)
// import { confetti } from "@tsparticles/confetti";

const BubblesBackground = () => {
    const [init, setInit] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });

        // Check if the device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
        };

        // Initial check
        checkMobile();

        // Add event listener for window resize
        window.addEventListener("resize", checkMobile);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", checkMobile);
        };

    }, []);

    const particlesLoaded = async (container?: Container) : Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            interactivity: {
                events: {
                    onHover: {
                        enable: false,
                        mode: "repulse"
                    }
                },
                modes: {
                    repulse: {
                        distance: 100
                    }
                }
            },
            particles: {
                color: {
                    value: "#94d8ff"
                },
                move: {
                    direction: MoveDirection.top,
                    enable: true,
                    outModes: {
                        default: OutMode.out
                    },
                    random: false,
                    speed: 1,
                    straight: true
                },
                number: {
                    density: {
                        enable: true
                    },
                    value: 30
                },
                opacity: {
                    value: 1
                },
                shape: {
                    type: "circle",
                    options: {
                        image: {
                            src: "https://www.freeiconspng.com/uploads/water-bubble-png-2.png"
                        }
                    }
                },
                size: {
                    value: { min: 10, max: 50 }
                },
                collisions: {
                    enable: true,
                    mode: "bounce"
                }
            },
            detectRetina: false
        }), []
    );

    if (init && !isMobile) {
        /*confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 1}
        });*/
        return(
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                style={{
                    position: "fixed",
                    zIndex: "100 !important"
                }}
            />
        )
    }
    
    return <></>;

};

export default BubblesBackground;