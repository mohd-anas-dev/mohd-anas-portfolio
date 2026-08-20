// import "../styles/About.css"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"
// import { useRef } from "react"
// import { SplitText } from "gsap/all"
// import { ScrollTrigger } from "gsap/all"
// import { DrawSVGPlugin } from "gsap/all"
// import myImage from "../assets/AboutMeAnas.jpg"

// gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin)

// const About = () => {

//     //! All Refs
//     const AboutRef = useRef(null)
//     const AboutTitle = useRef(null)
//     const ParaRef = useRef(null)
//     const AboutPageContainerThree = useRef(null)
//     const AboutPageContainerThreeIntroPara = useRef(null)
//     const AboutPageContainerThreeContentTwo = useRef(null)
//     const AboutPageContainerThreeContentTwoSVG = useRef(null)
//     const arrowPathOne = useRef(null)
//     const arrowPathTwo = useRef(null)
//     const AboutPageContainerThreeContentThree = useRef(null)
//     const AboutPageContainerThreeContentThreePara = useRef(null)
//     const AboutPageCOntainerThreeContentThreeHeader = useRef(null)
//     const AboutPageContainerThreeLetsContact = useRef(null)
//     const AboutSectionRef = useRef(null)

//     const horizontalTween = useRef(null)


//     useGSAP(() => {
//                     const contents = gsap.utils.toArray(".HorizontalSection .content")

//             horizontalTween.current = gsap.to(contents, {
//                 scrollTrigger: {
//                     trigger: ".HorizontalSection",
//                     scrub: 2,
//                     pin: true
//                 },
//                 xPercent: -100 * (contents.length - 1)
//             })


//         //! About Title Animation
//         document.fonts.ready.then(() => {

//             //!SplitTextByAboutTitleAnim
//             SplitText.create(AboutTitle.current, {
//                 type: "lines, chars",
//                 mask: "lines",
//                 autoSplit: true,
//                 aria: "auto",
//                 onSplit: (self) => {
//                     gsap.set(self.chars, {
//                         y: -200,
//                         transformOrigin: "center center",
//                         visibility: "hidden"
//                     })

//                     gsap.to(self.chars, {
//                         scrollTrigger: {
//                             trigger: AboutTitle.current,
//                             start: "center bottom",
//                             endTrigger: ParaRef.current,
//                             end: "top center",
//                             scrub: true,
//                         },
//                         y: 0,
//                         ease: "power2.out",
//                         visibility: "visible",
//                         stagger: {
//                             each: 0.08,
//                             from: "center"
//                         }
//                     })
//                 }
//             })

//             //!SplitTextByAboutParaAnim
//             SplitText.create(ParaRef.current, {
//                 type: "lines, chars",
//                 mask: "lines",
//                 autoSplit: true,
//                 aria: "auto",
//                 onSplit: (self) => {
//                     gsap.from(self.chars, {
//                         scrollTrigger: {
//                             trigger: ParaRef.current,
//                             start: "top bottom",
//                             endTrigger: ParaRef.current,
//                             end: "bottom 95%",
//                             scrub: 2,
//                         },
//                         opacity: 0.1,
//                         ease: "power1.out",
//                         stagger: {
//                             each: 1,
//                             from: "start"
//                         }
//                     })
//                 }
//             })



//             SplitText.create(".LeftAboutPageContainerTwo p", {
//                 type: "lines, chars",
//                 mask: "lines",
//                 autoSplit: true,
//                 aria: "auto",
//                 onSplit: (self) => {
//                     gsap.set(self.lines, {
//                         y: -100,
//                         visibility: "hidden",
//                         transformOrigin: "center center"
//                     })

//                     gsap.to(self.lines, {
//                         scrollTrigger: {
//                             trigger: ".AboutPageContainerTwo",
//                             containerAnimation: horizontalTween.current,
//                             start: "left 125%",
//                             end: "50% center",
//                             scrub: true,
//                         },
//                         y: 0,
//                         visibility: "visible",
//                         ease: "power1.out",
//                         stagger: {
//                             each: 0.08,
//                             from: "end"
//                         }
//                     })
//                 }
//             })

//             gsap.to(".ImgOverlay", {
//                 yPercent: -100,
//                 scrollTrigger: {
//                     trigger: ".RightAboutPageContainerTwo",
//                     containerAnimation: horizontalTween.current,
//                     start: "left 90%",
//                     end: "left 65%",
//                     scrub: true,
//                 },
//                 ease: "power1.out",

//             })



//             //!SplitTextByAboutContainerThree
//             SplitText.create(AboutPageContainerThreeIntroPara.current, {
//                 type: "lines, words",
//                 mask: "lines",
//                 autoSplit: true,
//                 aria: "auto",
//                 onSplit: (self) => {
//                     gsap.set(self.lines, {
//                         y: -200,
//                         visibility: "hidden",
//                         transformOrigin: "center center"
//                     })
//                     gsap.to(self.lines, {
//                         scrollTrigger: {
//                             trigger: AboutPageContainerThreeIntroPara.current,
//                             start: "top bottom",
//                             endTrigger: AboutPageContainerThreeContentTwo.current,
//                             end: "top 80%",
//                             scrub: true,
//                         },
//                         y: 0,
//                         visibility: "visible",
//                         ease: "power1.out",
//                         stagger: {
//                             each: 0.08,
//                             from: "end"
//                         },
//                     })
//                 }
//             })

//             //!SplitTextByAboutContainerThreeContentTwo
//             SplitText.create(AboutPageContainerThreeContentTwo.current, {
//                 type: "lines, words",
//                 mask: "lines",
//                 autoSplit: true,
//                 aria: "auto",
//                 onSplit: (self) => {
//                     gsap.set(self.lines, {
//                         y: -200,
//                         visibility: "hidden",
//                         transformOrigin: "center center"
//                     })
//                     gsap.to(self.lines, {
//                         scrollTrigger: {
//                             trigger: AboutPageContainerThreeContentTwo.current,
//                             start: "top bottom",
//                             endTrigger: AboutPageContainerThreeContentTwoSVG.current,
//                             end: "bottom bottom",
//                             scrub: true,
//                         },
//                         y: 0,
//                         visibility: "visible",
//                         ease: "power1.out",
//                         stagger: {
//                             each: 0.08,
//                             from: "end"
//                         }
//                     })
//                 }

//             })

//             //!DrawSVGForAboutContainerThreeContentTwo
//             gsap.fromTo(
//                 [arrowPathOne.current, arrowPathTwo.current],
//                 {
//                     drawSVG: "0%"
//                 },
//                 {
//                     scrollTrigger: {
//                         trigger: AboutPageContainerThreeContentTwo.current,
//                         start: "top 90%",
//                         endTrigger: AboutPageContainerThree.current,
//                         end: "bottom bottom",
//                         scrub: true,
//                     },
//                     drawSVG: "100%",
//                     ease: "none"
//                 }
//             )


//             //!SplitTextByAboutContainerThreeContentThreePara
//             SplitText.create(AboutPageContainerThreeContentThreePara.current, {
//                 type: "lines, words",
//                 mask: "lines",
//                 autoSplit: true,
//                 aria: "auto",
//                 onSplit: (self) => {
//                     gsap.set(self.lines, {
//                         y: -200,
//                         visibility: 'hidden',
//                         transformOrigin: "center center"
//                     })
//                     gsap.to(self.lines, {
//                         scrollTrigger: {
//                             trigger: AboutPageCOntainerThreeContentThreeHeader.current,
//                             start: "bottom bottom",
//                             endTrigger: AboutPageContainerThree.current,
//                             end: "centerbottom",
//                             scrub: true,
//                         },
//                         y: 0,
//                         visibility: "visible",
//                         ease: "power1.out",
//                         stagger: {
//                             each: 0.08,
//                             from: "end"
//                         }
//                     })
//                 }
//             })

//             //!SplitTextByAboutPageContainerThreeLetsContact
//             SplitText.create(AboutPageContainerThreeLetsContact.current, {
//                 type: "chars",
//                 mask: "lines",
//                 autoSplit: true,
//                 aria: "auto",
//                 onSplit: (self) => {
//                     gsap.set(self.chars, {
//                         y: -10,
//                         visibility: "hidden",
//                         transformOrigin: "center center"
//                     })

//                     gsap.to(self.chars, {
//                         scrollTrigger: {
//                             trigger: AboutPageContainerThreeContentThreePara.current,
//                             start: "bottom bottom",
//                             endTrigger: AboutPageContainerThree.current,
//                             end: "bottom bottom",
//                             scrub: true,
//                         },
//                         y: 0,
//                         visibility: "visible",
//                         ease: "power1.out",
//                         stagger: {
//                             each: 0.08,
//                             from: "center"
//                         }
//                     })
//                 }

//             })
//         })




//     }, { scope: AboutRef })




//     return (
//         <>
//             <div className="AboutMain">
//                 <div className="AboutHeader">
//                     <h1 ref={AboutTitle}>About <span> Me</span></h1>
//                 </div>
//                 <div className="About" ref={AboutRef}>
//                     <div className="HorizontalSection" ref={AboutSectionRef}>
//                         <div className="content AboutPageContainerOne">
//                             <div className="AboutPageContainer">
//                                 <div className="LeftAboutContainer"></div>
//                                 <div className="RightAboutContainer">
//                                     <p ref={ParaRef}>TECHNOLOGY <span className="spanone">IS NOT JUST TOOL</span>, BUT A SYSTEM FOR TURNING IDEAS INTO <span className="spantwo">IMPACT</span></p>
//                                 </div>
//                             </div>

//                         </div>


//                         <div className="content">
//                             <div className="AboutPageContainerTwo">
//                                 <div className="LeftAboutPageContainerTwo">
//                                     <p>I'm <span>Anas</span>, a passionate <span>Creative Full Stack Developer</span>  based in Sharjah, UAE. I specialize in engineering high-performance web applications and interactive digital experiences.</p>

//                                 </div>
//                                 <div className="RightAboutPageContainerTwo">
//                                     <div className="ImgOverlay"></div>
//                                     <img src={myImage} alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="AboutPageContainerThree" ref={AboutPageContainerThree}>
//                     <div className="AboutPageContainerThreeSvg">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="1387" height="1" viewBox="0 0 1387 1" fill="none">
//                             <rect width="1387" height="1" fill="#ADADAD" />
//                         </svg>
//                     </div>

//                     <div className="AboutPageContainerThreeContent">
//                         <div className="AboutPageContainerThreeContentOne">
//                             <p ref={AboutPageContainerThreeIntroPara}>It's not just a profession <span>-</span> it's a way of thinking.</p>
//                         </div>
//                         <div className="AboutPageContainerThreeContentTwo">
//                             <p ref={AboutPageContainerThreeContentTwo}>MY WORK IS PART OF MY CURIOSITY. AS A FULL-STACK DEVELOPER, I AM CONSTANTLY EXPLORING HOW CODE, DESIGN, AND TECHNOLOGY CAN COME TOGETHER TO CREATE SOMETHING MEANINGFUL.</p>
//                             <svg ref={AboutPageContainerThreeContentTwoSVG} xmlns="http://www.w3.org/2000/svg" width="70" height="89" viewBox="0 0 70 89" fill="none">
//                                 <path ref={arrowPathOne} stroke="#FE4D1D" fill="none" strokeWidth="3" d="M0.652914 0.288389C0.642505 0.20212 0.598252 0.12352 0.529891 0.0698787C0.461529 0.0162376 0.374658 -0.00804985 0.288389 0.00235921C0.20212 0.0127682 0.12352 0.0570212 0.0698787 0.125383C0.0162376 0.193745 -0.00804985 0.280615 0.00235921 0.366884C0.00235921 0.366884 0.00235921 0.366884 0.00235921 0.366884C0.226297 2.15542 0.621549 3.91048 1.05098 5.64679C2.61002 11.764 4.67638 17.7364 7.12837 23.5469C7.12862 23.5475 7.12887 23.5481 7.12912 23.5487C9.47091 29.1664 13.3779 33.8438 17.0577 38.554C17.0603 38.5572 17.0629 38.5604 17.0654 38.5636C24.5481 47.8444 32.3183 56.8966 40.2308 65.8087C40.2362 65.8148 40.2417 65.8209 40.2471 65.827C40.2522 65.8327 40.268 65.8488 40.2735 65.854C46.0717 71.2259 51.8382 76.6147 58.5684 80.9571C59.4835 81.5251 60.4208 82.0638 61.4207 82.5204C61.421 82.5205 61.4213 82.5206 61.4216 82.5208L61.3746 82.4976C61.963 82.8196 62.3772 83.2439 62.856 83.7827C62.9927 83.9325 63.1811 84.0187 63.3838 84.0186C63.5862 84.0187 63.7862 83.9325 63.936 83.7826C64.0858 83.6328 64.1721 83.4328 64.172 83.2304C64.1721 83.0277 64.0858 82.8393 63.936 82.7026C63.936 82.7026 63.936 82.7026 63.936 82.7026C63.4096 82.2018 62.7045 81.6823 62.0082 81.3282C61.9989 81.3232 61.9708 81.3092 61.9612 81.305C61.9609 81.3049 61.9606 81.3048 61.9604 81.3047C61.0334 80.9029 60.1224 80.406 59.2261 79.8754C52.5831 75.7918 46.6383 70.5673 40.8579 65.2292L40.8843 65.2562C40.8789 65.2501 40.8734 65.244 40.868 65.238C32.9521 56.3579 25.1795 47.3012 17.6997 38.0558C17.6972 38.0526 17.6946 38.0494 17.692 38.0462C14.0073 33.3497 10.0211 28.7917 7.73202 23.292C7.73177 23.2914 7.73152 23.2908 7.73127 23.2902C5.29387 17.5153 3.2335 11.5585 1.68674 5.48807C1.26092 3.76776 0.869931 2.02463 0.652914 0.288389Z" />
//                                 <path ref={arrowPathTwo} stroke="#FE4D1D" fill="none" strokeWidth="3" d="M54.655 86.2018C54.4809 86.2895 54.3488 86.4428 54.2877 86.6278C54.2267 86.8129 54.2416 87.0147 54.3293 87.1887C54.417 87.3628 54.5702 87.4949 54.7553 87.556C54.9404 87.617 55.1422 87.6021 55.3162 87.5144C55.3162 87.5144 55.3162 87.5144 55.3162 87.5144C55.3067 87.5143 55.5775 87.4399 55.7562 87.4092C55.9529 87.3717 56.1631 87.3391 56.3694 87.3111C59.2009 86.9597 62.1501 87.0385 65.0084 87.4357C65.0123 87.4362 65.0161 87.4368 65.02 87.4373C66.1912 87.605 67.3468 87.902 68.4811 88.145C69.246 88.3087 69.7445 87.6899 69.4494 86.9655C69.4485 86.9631 69.4475 86.9607 69.4465 86.9583C68.2957 84.0726 66.93 81.1502 66.2083 78.3597L66.2197 78.4199C66.2195 78.4187 66.2193 78.4176 66.2192 78.4164C66.1331 77.8443 66.1204 77.3427 66.2047 76.8143C66.2619 76.4487 66.3615 76.0741 66.4889 75.6932C66.5702 75.45 66.5513 75.1849 66.4357 74.956C66.3201 74.7272 66.1173 74.5532 65.8726 74.4727C65.6279 74.3922 65.3614 74.4118 65.1326 74.5274C64.9037 74.643 64.7311 74.8451 64.6521 75.089C64.6521 75.089 64.6521 75.089 64.6521 75.089C64.5047 75.5446 64.3788 76.0209 64.3036 76.5251C64.1893 77.25 64.2223 78.0307 64.3385 78.709C64.3387 78.7104 64.3389 78.7118 64.3392 78.7132C64.3411 78.7253 64.3478 78.7615 64.3506 78.7734C65.2486 82.0147 66.6353 84.7473 67.8542 87.6256C67.8552 87.628 67.8562 87.6304 67.8572 87.6327L68.8255 86.4533C67.6216 86.2264 66.418 86.1529 65.2269 85.9823C65.223 85.9817 65.2191 85.9812 65.2152 85.9806C62.2199 85.5675 59.2061 85.4802 56.1715 85.8548C55.946 85.8855 55.7139 85.9211 55.4807 85.9655C55.3657 85.9876 55.2498 86.0114 55.1192 86.0437C54.9869 86.0801 54.8862 86.0942 54.655 86.2018Z" />
//                             </svg>
//                         </div>
//                         <div className="AboutPageContainerThreeContentThree" ref={AboutPageContainerThreeContentThree}>
//                             <div className="ThreeContentThreeHeader">
//                                 <h1 ref={AboutPageCOntainerThreeContentThreeHeader}>My Philosophy</h1>
//                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M18.5 18.5L5.5 5.5M18.5 18.5H8.5M18.5 18.5V8.5" stroke="#adadad" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//                                 </svg>
//                             </div>
//                             <div className="ThreeContentThreePara">
//                                 <div className="ContentThreeParaHeader">
//                                     <h1 ref={AboutPageContainerThreeLetsContact}>Lets Contact</h1>
//                                     <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 149 1" fill="none">
//                                         <rect width="149" height="1" fill="#FE4D1D" />
//                                     </svg>
//                                     <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M18.5 5.5L5.5 18.5M18.5 5.5H8.5M18.5 5.5V15.5" stroke="#fe4d1d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//                                     </svg>
//                                 </div>
//                                 <p ref={AboutPageContainerThreeContentThreePara}>I VALUE SIMPLICITY, PURPOSE, AND FUNCTIONALITY — BUILDING SYSTEMS THAT ARE POWERFUL WITHOUT FEELING COMPLEX. I BELIEVE THE BEST DIGITAL EXPERIENCES COME FROM UNDERSTANDING BOTH SIDES: THE PEOPLE WHO USE THEM AND THE TECHNOLOGY THAT MAKES THEM POSSIBLE.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default About























//TODOS: VERTICAL OVERLAY






import "../styles/About.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText, ScrollTrigger, DrawSVGPlugin } from "gsap/all";
import myImage from "../assets/AboutMeAnas.jpg";

gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);

const About = () => {
    //! All Refs
    const AboutRef = useRef(null);
    const AboutTitle = useRef(null);
    const ParaRef = useRef(null);

    const VerticalOverlaySection = useRef(null);
    const AboutPageContainerTwoRef = useRef(null);
    const AboutPageContainerTwoPara = useRef(null);

    const AboutPageContainerThree = useRef(null);
    const AboutPageContainerThreeIntroPara = useRef(null);
    const AboutPageContainerThreeContentTwo = useRef(null);
    const AboutPageContainerThreeContentTwoSVG = useRef(null);

    const arrowPathOne = useRef(null);
    const arrowPathTwo = useRef(null);

    const AboutPageContainerThreeContentThree = useRef(null);
    const AboutPageContainerThreeContentThreePara = useRef(null);
    const AboutPageContainerThreeContentThreeHeader = useRef(null);
    const AboutPageContainerThreeLetsContact = useRef(null);

        const handleWhatsAppClick = () => {
        const phoneNumber = "971568936869";
        const message = "Hey Anas! I came across your portfolio and would like to talk about a project.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");


    }


    useGSAP(() => {



        document.fonts.ready.then(() => {

            //! ============================================
            //! ABOUT TITLE
            //! ============================================

            SplitText.create(AboutTitle.current, {
                type: "lines, chars",
                mask: "lines",
                autoSplit: true,
                aria: "auto",

                onSplit: (self) => {

                    gsap.set(self.chars, {
                        y: -200,
                        transformOrigin: "center center",
                        visibility: "hidden"
                    });

                    gsap.to(self.chars, {
                        scrollTrigger: {
                            trigger: AboutTitle.current,
                            start: "center bottom",
                            endTrigger: ParaRef.current,
                            end: "top center",
                            scrub: true,
                        },

                        y: 0,
                        visibility: "visible",

                        ease: "power2.out",

                        stagger: {
                            each: 0.08,
                            from: "center"
                        }
                    });
                }
            });


            //! ============================================
            //! FIRST PAGE PARAGRAPH
            //! ============================================

            SplitText.create(ParaRef.current, {
                type: "lines, chars",
                mask: "lines",
                autoSplit: true,
                aria: "auto",

                onSplit: (self) => {

                    gsap.from(self.chars, {

                        scrollTrigger: {
                            trigger: ParaRef.current,
                            start: "top bottom",
                            endTrigger: ParaRef.current,
                            end: "bottom 95%",
                            scrub: 2,
                        },

                        opacity: 0.1,

                        ease: "power1.out",

                        stagger: {
                            each: 1,
                            from: "start"
                        }
                    });
                }
            });


            //! ============================================
            //! PAGE TWO PARAGRAPH
            //! ============================================


            //! ============================================
            //! PAGE THREE INTRO
            //! ============================================

            SplitText.create(
                AboutPageContainerThreeIntroPara.current,
                {
                    type: "lines, words",
                    mask: "lines",
                    autoSplit: true,
                    aria: "auto",

                    onSplit: (self) => {

                        gsap.set(self.lines, {
                            y: -200,
                            visibility: "hidden",
                            transformOrigin: "center center"
                        });

                        gsap.to(self.lines, {

                            scrollTrigger: {
                                trigger:
                                    AboutPageContainerThreeIntroPara.current,

                                start: "top bottom",

                                endTrigger:
                                    AboutPageContainerThreeContentTwo.current,

                                end: "top 80%",

                                scrub: true,
                            },

                            y: 0,
                            visibility: "visible",

                            ease: "power1.out",

                            stagger: {
                                each: 0.08,
                                from: "end"
                            },
                        });
                    }
                }
            );


            //! ============================================
            //! PAGE THREE CONTENT TWO
            //! ============================================

            SplitText.create(
                AboutPageContainerThreeContentTwo.current,
                {
                    type: "lines, words",
                    mask: "lines",
                    autoSplit: true,
                    aria: "auto",

                    onSplit: (self) => {

                        gsap.set(self.lines, {
                            y: -200,
                            visibility: "hidden",
                            transformOrigin: "center center"
                        });

                        gsap.to(self.lines, {

                            scrollTrigger: {
                                trigger:
                                    AboutPageContainerThreeContentTwo.current,

                                start: "top bottom",

                                endTrigger:
                                    AboutPageContainerThreeContentTwoSVG.current,

                                end: "bottom bottom",

                                scrub: true,
                            },

                            y: 0,
                            visibility: "visible",

                            ease: "power1.out",

                            stagger: {
                                each: 0.08,
                                from: "end"
                            }
                        });
                    }
                }
            );


            //! ============================================
            //! DRAW SVG ARROW
            //! ============================================

            gsap.fromTo(
                [
                    arrowPathOne.current,
                    arrowPathTwo.current
                ],
                {
                    drawSVG: "0%"
                },
                {
                    scrollTrigger: {
                        trigger:
                            AboutPageContainerThreeContentTwo.current,

                        start: "top 90%",

                        endTrigger:
                            AboutPageContainerThree.current,

                        end: "bottom bottom",

                        scrub: true,
                    },

                    drawSVG: "100%",

                    ease: "none"
                }
            );


            //! ============================================
            //! PHILOSOPHY HEADER
            //! ============================================

            SplitText.create(
                AboutPageContainerThreeContentThreeHeader.current,
                {
                    type: "lines, chars",
                    mask: "lines",
                    autoSplit: true,
                    aria: "auto",

                    onSplit: (self) => {

                        gsap.set(self.chars, {
                            y: -200,
                            transformOrigin: "center center",
                            visibility: "hidden"
                        });

                        gsap.to(self.chars, {

                            scrollTrigger: {
                                trigger:
                                    AboutPageContainerThreeContentTwoSVG.current,

                                start: "bottom bottom",

                                endTrigger:
                                    AboutPageContainerThree.current,

                                end: "bottom bottom",

                                scrub: true
                            },

                            y: 0,
                            visibility: "visible",

                            ease: "power3.out",

                            stagger: {
                                each: 0.08,
                                from: "center"
                            }
                        });
                    }
                }
            );


            //! ============================================
            //! PHILOSOPHY PARAGRAPH
            //! ============================================

            SplitText.create(
                AboutPageContainerThreeContentThreePara.current,
                {
                    type: "lines, words",
                    mask: "lines",
                    autoSplit: true,
                    aria: "auto",

                    onSplit: (self) => {

                        gsap.set(self.lines, {
                            y: -200,
                            visibility: "hidden",
                            transformOrigin: "center center"
                        });

                        gsap.to(self.lines, {

                            scrollTrigger: {
                                trigger:
                                    AboutPageContainerThreeContentThreeHeader.current,

                                start: "bottom bottom",

                                endTrigger:
                                    AboutPageContainerThree.current,

                                end: "bottom bottom",

                                scrub: true,
                            },

                            y: 0,
                            visibility: "visible",

                            ease: "power1.out",

                            stagger: {
                                each: 0.08,
                                from: "end"
                            }
                        });
                    }
                }
            );


            //! ============================================
            //! LET'S CONTACT
            //! ============================================

            SplitText.create(
                AboutPageContainerThreeLetsContact.current,
                {
                    type: "chars",
                    mask: "lines",
                    autoSplit: true,
                    aria: "auto",

                    onSplit: (self) => {

                        gsap.set(self.chars, {
                            y: -10,
                            visibility: "hidden",
                            transformOrigin: "center center"
                        });

                        gsap.to(self.chars, {

                            scrollTrigger: {
                                trigger:
                                    AboutPageContainerThreeContentThreePara.current,

                                start: "bottom bottom",

                                endTrigger:
                                    AboutPageContainerThree.current,

                                end: "bottom bottom",

                                scrub: true,
                            },

                            y: 0,
                            visibility: "visible",

                            ease: "power1.out",

                            stagger: {
                                each: 0.08,
                                from: "center"
                            }
                        });
                    }
                }
            );
        });



        //! ============================================
        //! VERTICAL OVERLAY
        //! ============================================

        // const overlayTimeline = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: VerticalOverlaySection.current,

        //         start: "top top",

        //         // How much scrolling is required
        //         // for Page Two to completely cover Page One
        //         end: "+=100%",

        //         scrub: true,

        //         pin: true,

        //         anticipatePin: 1,

        //         invalidateOnRefresh: true,
        //     }
        // });

        // gsap.to(".ImgOverlay", {
        //     yPercent: -100,
        //     scrollTrigger: {
        //         trigger: ".ImgOverlay",
        //         start: "top center",
        //         endTrigger: ".ImgOverlay",
        //         end: "bottom bottom",
        //         scrub: true,
        //         markers: true
        //     },
        //     ease: "power1.out",

        // })


        // overlayTimeline.fromTo(
        //     AboutPageContainerTwoRef.current,

        //     {
        //         yPercent: -100
        //     },

        //     {
        //         yPercent: 0,

        //         ease: "none"
        //     }
        // );
        //! ============================================
        //! VERTICAL OVERLAY
        //! ============================================

        const overlayTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: VerticalOverlaySection.current,
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });

        // PAGE TWO MOVES UP
        overlayTimeline.fromTo(
            AboutPageContainerTwoRef.current,
            {
                yPercent: -100,
            },
            {
                yPercent: 0,
                ease: "none",
            },
            0
        );

        // IMAGE OVERLAY REVEALS
        overlayTimeline.fromTo(
            ".ImgOverlay",
            {
                yPercent: 50,
            },
            {
                yPercent: -100,
                ease: "none",
            },
            0
        );

 

    }, {
        scope: AboutRef
    });


    return (
        <div className="AboutMain" id="about">

            {/* ========================================= */}
            {/* ABOUT HEADER */}
            {/* ========================================= */}

            <div className="AboutHeader">

                <h1 ref={AboutTitle}>
                    About <span>Me</span>
                </h1>

            </div>


            {/* ========================================= */}
            {/* ABOUT */}
            {/* ========================================= */}

            <div
                className="About"
                ref={AboutRef}
            >

                {/* ===================================== */}
                {/* VERTICAL OVERLAY SECTION */}
                {/* ===================================== */}

                <div
                    className="VerticalOverlaySection"
                    ref={VerticalOverlaySection}
                >

                    {/* ================================= */}
                    {/* PAGE ONE */}
                    {/* ================================= */}

                    <div className="AboutPageContainerOne">

                        <div className="AboutPageContainer">

                            <div className="LeftAboutContainer">
                            </div>

                            <div className="RightAboutContainer">

                                <p ref={ParaRef}>
                                    TECHNOLOGY{" "}
                                    <span className="spanone">
                                        IS NOT JUST TOOL
                                    </span>
                                    , BUT A SYSTEM FOR TURNING IDEAS INTO{" "}
                                    <span className="spantwo">
                                        IMPACT
                                    </span>
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* ================================= */}
                    {/* PAGE TWO */}
                    {/* ================================= */}

                    <div
                        className="AboutPageContainerTwo"
                        ref={AboutPageContainerTwoRef}
                    >

                        <div className="LeftAboutPageContainerTwo">

                            <p ref={AboutPageContainerTwoPara}>
                                I'm <span>Anas</span>, a passionate{" "}
                                <span>
                                    Creative Full Stack Developer
                                </span>{" "}
                                based in Sharjah, UAE. I specialize in
                                engineering high-performance web applications
                                and interactive digital experiences.
                            </p>

                        </div>


                        <div className="RightAboutPageContainerTwo">
                            <div className="ImgOverlay"></div>
                            <img
                                src={myImage}
                                alt="Anas"
                            />

                        </div>

                    </div>





                </div>

            </div>


            {/* ========================================= */}
            {/* PAGE THREE */}
            {/* ========================================= */}

            <div
                className="AboutPageContainerThree"
                ref={AboutPageContainerThree}
            >

                <div className="AboutPageContainerThreeSvg">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1387"
                        height="1"
                        viewBox="0 0 1387 1"
                        fill="none"
                    >
                        <rect
                            width="1387"
                            height="1"
                            fill="#ADADAD"
                        />
                    </svg>

                </div>


                <div className="AboutPageContainerThreeContent">


                    {/* ================================= */}
                    {/* INTRO */}
                    {/* ================================= */}

                    <div className="AboutPageContainerThreeContentOne">

                        <p ref={AboutPageContainerThreeIntroPara}>
                            It's not just a profession{" "}
                            <span>-</span> it's a way of thinking.
                        </p>

                    </div>


                    {/* ================================= */}
                    {/* CONTENT TWO */}
                    {/* ================================= */}

                    <div className="AboutPageContainerThreeContentTwo">

                        <p ref={AboutPageContainerThreeContentTwo}>
                            MY WORK IS PART OF MY CURIOSITY. AS A FULL-STACK
                            DEVELOPER, I AM CONSTANTLY EXPLORING HOW CODE,
                            DESIGN, AND TECHNOLOGY CAN COME TOGETHER TO CREATE
                            SOMETHING MEANINGFUL.
                        </p>


                        <svg
                            ref={AboutPageContainerThreeContentTwoSVG}
                            xmlns="http://www.w3.org/2000/svg"
                            width="70"
                            height="89"
                            viewBox="0 0 70 89"
                            fill="none"
                        >

                            <path
                                ref={arrowPathOne}
                                stroke="#FE4D1D"
                                fill="none"
                                strokeWidth="3"
                                d="M0.652914 0.288389C0.642505 0.20212 0.598252 0.12352 0.529891 0.0698787C0.461529 0.0162376 0.374658 -0.00804985 0.288389 0.00235921C0.20212 0.0127682 0.12352 0.0570212 0.0698787 0.125383C0.0162376 0.193745 -0.00804985 0.280615 0.00235921 0.366884C0.00235921 0.366884 0.00235921 0.366884 0.00235921 0.366884C0.226297 2.15542 0.621549 3.91048 1.05098 5.64679C2.61002 11.764 4.67638 17.7364 7.12837 23.5469C7.12862 23.5475 7.12887 23.5481 7.12912 23.5487C9.47091 29.1664 13.3779 33.8438 17.0577 38.554C17.0603 38.5572 17.0629 38.5604 17.0654 38.5636C24.5481 47.8444 32.3183 56.8966 40.2308 65.8087C40.2362 65.8148 40.2417 65.8209 40.2471 65.827C40.2522 65.8327 40.268 65.8488 40.2735 65.854C46.0717 71.2259 51.8382 76.6147 58.5684 80.9571C59.4835 81.5251 60.4208 82.0638 61.4207 82.5204C61.421 82.5205 61.4213 82.5206 61.4216 82.5208L61.3746 82.4976C61.963 82.8196 62.3772 83.2439 62.856 83.7827C62.9927 83.9325 63.1811 84.0187 63.3838 84.0186C63.5862 84.0187 63.7862 83.9325 63.936 83.7826C64.0858 83.6328 64.1721 83.4328 64.172 83.2304C64.1721 83.0277 64.0858 82.8393 63.936 82.7026C63.936 82.7026 63.936 82.7026 63.936 82.7026C63.4096 82.2018 62.7045 81.6823 62.0082 81.3282C61.9989 81.3232 61.9708 81.3092 61.9612 81.305C61.9609 81.3049 61.9606 81.3048 61.9604 81.3047C61.0334 80.9029 60.1224 80.406 59.2261 79.8754C52.5831 75.7918 46.6383 70.5673 40.8579 65.2292L40.8843 65.2562C40.8789 65.2501 40.8734 65.244 40.868 65.238C32.9521 56.3579 25.1795 47.3012 17.6997 38.0558C17.6972 38.0526 17.6946 38.0494 17.692 38.0462C14.0073 33.3497 10.0211 28.7917 7.73202 23.292C7.73177 23.2914 7.73152 23.2908 7.73127 23.2902C5.29387 17.5153 3.2335 11.5585 1.68674 5.48807C1.26092 3.76776 0.869931 2.02463 0.652914 0.288389Z"
                            />

                            <path
                                ref={arrowPathTwo}
                                stroke="#FE4D1D"
                                fill="none"
                                strokeWidth="3"
                                d="M54.655 86.2018C54.4809 86.2895 54.3488 86.4428 54.2877 86.6278C54.2267 86.8129 54.2416 87.0147 54.3293 87.1887C54.417 87.3628 54.5702 87.4949 54.7553 87.556C54.9404 87.617 55.1422 87.6021 55.3162 87.5144C55.3162 87.5144 55.3162 87.5144 55.3162 87.5144C55.3067 87.5143 55.5775 87.4399 55.7562 87.4092C55.9529 87.3717 56.1631 87.3391 56.3694 87.3111C59.2009 86.9597 62.1501 87.0385 65.0084 87.4357C65.0123 87.4362 65.0161 87.4368 65.02 87.4373C66.1912 87.605 67.3468 87.902 68.4811 88.145C69.246 88.3087 69.7445 87.6899 69.4494 86.9655C69.4485 86.9631 69.4475 86.9607 69.4465 86.9583C68.2957 84.0726 66.93 81.1502 66.2083 78.3597L66.2197 78.4199C66.2195 78.4187 66.2193 78.4176 66.2192 78.4164C66.1331 77.8443 66.1204 77.3427 66.2047 76.8143C66.2619 76.4487 66.3615 76.0741 66.4889 75.6932C66.5702 75.45 66.5513 75.1849 66.4357 74.956C66.3201 74.7272 66.1173 74.5532 65.8726 74.4727C65.6279 74.3922 65.3614 74.4118 65.1326 74.5274C64.9037 74.643 64.7311 74.8451 64.6521 75.089C64.6521 75.089 64.6521 75.089 64.6521 75.089C64.5047 75.5446 64.3788 76.0209 64.3036 76.5251C64.1893 77.25 64.2223 78.0307 64.3385 78.709C64.3387 78.7104 64.3389 78.7118 64.3392 78.7132C64.3411 78.7253 64.3478 78.7615 64.3506 78.7734C65.2486 82.0147 66.6353 84.7473 67.8542 87.6256C67.8552 87.628 67.8562 87.6304 67.8572 87.6327L68.8255 86.4533C67.6216 86.2264 66.418 86.1529 65.2269 85.9823C65.223 85.9817 65.2191 85.9812 65.2152 85.9806C62.2199 85.5675 59.2061 85.4802 56.1715 85.8548C55.946 85.8855 55.7139 85.9211 55.4807 85.9655C55.3657 85.9876 55.2498 86.0114 55.1192 86.0437C54.9869 86.0801 54.8862 86.0942 54.655 86.2018Z"
                            />

                        </svg>

                    </div>


                    {/* ================================= */}
                    {/* PHILOSOPHY */}
                    {/* ================================= */}

                    <div
                        className="AboutPageContainerThreeContentThree"
                        ref={AboutPageContainerThreeContentThree}
                    >

                        <div className="ThreeContentThreeHeader">

                            <h1
                                ref={
                                    AboutPageContainerThreeContentThreeHeader
                                }
                            >
                                My Philosophy
                            </h1>

                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.5 18.5L5.5 5.5M18.5 18.5H8.5M18.5 18.5V8.5"
                                    stroke="#adadad"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </div>


                        <div className="ThreeContentThreePara">

                            <div className="ContentThreeParaHeader" onClick={handleWhatsAppClick}>

                                <h1 ref={AboutPageContainerThreeLetsContact}>
                                    Lets Contact
                                </h1>

                                <svg
                                    className="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="140"
                                    height="4"
                                    viewBox="0 0 149 1"
                                    fill="none"
                                >
                                    <rect
                                        width="149"
                                        height="1"
                                        fill="#FE4D1D"
                                    />
                                </svg>

                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.5 5.5L5.5 18.5M18.5 5.5H8.5M18.5 5.5V15.5"
                                        stroke="#fe4d1d"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                            </div>


                            <p ref={AboutPageContainerThreeContentThreePara}>
                                I VALUE SIMPLICITY, PURPOSE, AND FUNCTIONALITY
                                — BUILDING SYSTEMS THAT ARE POWERFUL WITHOUT
                                FEELING COMPLEX. I BELIEVE THE BEST DIGITAL
                                EXPERIENCES COME FROM UNDERSTANDING BOTH
                                SIDES: THE PEOPLE WHO USE THEM AND THE
                                TECHNOLOGY THAT MAKES THEM POSSIBLE.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;
