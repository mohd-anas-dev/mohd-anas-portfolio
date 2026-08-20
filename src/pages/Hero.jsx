import "../styles/Hero.css"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import CustomEase from "gsap/CustomEase.js"
import DrawSVGPlugin from "gsap/DrawSVGPlugin"
import { lenis } from "../components/layout/SmoothScroll"

gsap.registerPlugin(SplitText, DrawSVGPlugin, CustomEase)
const Hero = ({ isLoaded, onCompleteHeroAnimation }) => {
    const HeroRef = useRef(null)
    const FullStackRef = useRef(null)
    const DeveloperRef = useRef(null)
    const HeroContainerRef = useRef(null)
    const HeroContainerUpper = useRef(null)
    const ParaLeftHeroContainer = useRef(null)
    const BasedInRef = useRef(null)
    const SvgRef = useRef(null)
    const svgRefLine = useRef(null)
    const ButtonRef = useRef(null)
    const marqueRef = useRef(null)

    const scrollToSection = (id) => {
        if (!lenis) return;

        lenis.scrollTo(id, {
            duration: 1.5,
        });
    };

    useGSAP(() => {

        if (!isLoaded) return


        const heroTimeline = gsap.timeline()
        const heroSplitTextAnimation = (target, vars, position) => {
            SplitText.create(target.current, {
                type: "lines, chars",
                mask: "lines",
                autoSplit: true,
                onSplit: (self) => {
                    heroTimeline.from(self.lines, vars, position)

                }
            })

        }


        //! Hero Role SplitText Animation
        SplitText.create([FullStackRef.current, DeveloperRef.current], {
            type: "lines, chars",
            mask: "lines",
            autoSplit: true,
            aria: "auto",
            onSplit: (self) => {
                gsap.set(self.chars, {
                    y: -300,
                    transformOrigin: "center center",
                    visibility: "hidden"
                })
                heroTimeline.to(self.chars, {
                    y: 0,
                    visibility: "visible",
                    ease: "power1.out",
                    duration: 0.6,
                    stagger: {
                        each: 0.04,
                        from: "center"
                    }
                }, "0")
            }
        })


        //! HeroSplitText Para Animation
        heroSplitTextAnimation(ParaLeftHeroContainer, {
            y: -200,
            ease: CustomEase.create("custom", "M0,0 C0.104,0.204 -0.166,0.963 1,1"),
            duration: 0.6,
            stagger: {
                each: 0.25,
                from: "end"
            }
        }, "+1")


        //! HeroSplitText BasedInRef Animation
        heroSplitTextAnimation(BasedInRef, {
            y: -200,
            ease: CustomEase.create("custom", "M0,0 C0.104,0.204 -0.166,0.963 1,1"),
            duration: 0.6,
        }, "+1")


        //! HeroSplitText SVG Animation
        gsap.set(svgRefLine.current, {
            drawSVG: "0%"
        })

        heroTimeline.to(
            svgRefLine.current,
            {
                drawSVG: "100%",
                duration: 0.8,
                ease: "power1.out",
            },
            "+=0.1"
        )

        //! Hero Button Animation
        gsap.set(ButtonRef.current, {
            transformOrigin: "end",
            visibility: "hidden",
            scaleY: 0
        })
        heroTimeline.to(ButtonRef.current, {
            scaleY: 1,
            visibility: "visible",
            ease: "power1.in",
            duration: 0.5,
        }, "+1")


        //! Marquee Animation
        gsap.set(marqueRef.current, {
            transformOrigin: "end"
        })
        heroTimeline.to(marqueRef.current, {
            scaleY: 1,
            ease: "power1.in",
            duration: 0.5,
            onComplete: () => {
                onCompleteHeroAnimation?.()
            }
        }, "+1")


    }, { scope: HeroRef, dependencies: [isLoaded] })

    return (
        <>
            <div className={`Hero ${isLoaded ? "HeroReady" : ""}`} ref={HeroRef} id="home">
                <div className="HeroContainer" ref={HeroContainerRef}>
                    <div className="HeroContainerUpper" ref={HeroContainerUpper}>
                        <div className="HeroContainerRole">
                            <div className="HeroContainerFirstRol" ref={FullStackRef}><h1>Full Stack</h1></div>
                            <div className="HeroContainerLastRol" ref={DeveloperRef}><h1>Developer</h1></div>
                        </div>
                        <div className="HeroContainerDetails">
                            <div className="LeftHeroContainerDetails">
                                <p ref={ParaLeftHeroContainer}>I design and build scalable web experiances that are fast,
                                    functional and made to make an impact.</p>
                                <button ref={ButtonRef} onClick={() => scrollToSection("#projects")}><h1>View my work</h1>
                                    <div className="HomeButtonOverlay"></div>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5 5.5L5.5 18.5M18.5 5.5H8.5M18.5 5.5V15.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg></button>
                            </div>
                            <div className="RightHeroContainerDetails">
                                <svg
                                    ref={SvgRef}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="65"
                                    height="1"
                                    viewBox="0 0 65 1"
                                    fill="none"
                                >
                                    <path
                                        ref={svgRefLine}
                                        d="M65 0.5H0"
                                        stroke="#171616"
                                        strokeWidth="1"
                                    />
                                </svg>
                                <h1 ref={BasedInRef}>Based In UAE</h1>
                            </div>
                        </div>
                    </div>

                    <div className="HeroContainerLower">
                        <div className="HeroContainerMarquee" ref={marqueRef}>
                            <div className="HeroMarqueeTrack">
                                <div className="HeroMarqueeItem">
                                    <span>BUILDING DIGITAL EXPERIENCES</span>
                                    <b>✦</b>
                                </div>

                                <div className="HeroMarqueeItem">
                                    <span>FULL STACK DEVELOPMENT</span>
                                    <b>✦</b>
                                </div>

                                <div className="HeroMarqueeItem">
                                    <span>TURNING IDEAS INTO PRODUCTS</span>
                                    <b>✦</b>
                                </div>

                                <div className="HeroMarqueeItem">
                                    <span>BASED IN UAE</span>
                                    <b>✦</b>
                                </div>

                                <div className="HeroMarqueeItem">
                                    <span>BUILDING DIGITAL EXPERIENCES</span>
                                    <b>✦</b>
                                </div>

                                <div className="HeroMarqueeItem">
                                    <span>FULL STACK DEVELOPMENT</span>
                                    <b>✦</b>
                                </div>

                                <div className="HeroMarqueeItem">
                                    <span>TURNING IDEAS INTO PRODUCTS</span>
                                    <b>✦</b>
                                </div>

                                <div className="HeroMarqueeItem">
                                    <span>BASED IN UAE</span>
                                    <b>✦</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="ExtraHeroContainer">
                    <h1>Availble for collaboration <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 18.5L5.5 5.5M18.5 18.5H8.5M18.5 18.5V8.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg> <p>mdanas.dev@gmail.com</p></h1>
                    <span>Lorem ipsum dolor sit amet</span>
                </div> */}
            </div>



        </>
    )
}

export default Hero




