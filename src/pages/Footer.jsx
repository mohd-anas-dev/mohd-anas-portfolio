import "../styles/Footer.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitText from "gsap/src/SplitText"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/all"
import { Link } from "react-router-dom"
gsap.registerPlugin(ScrollTrigger, SplitText)
const Footer = () => {
    const footerName = useRef()
    const footer = useRef()
    const footerContainerLeftTop = useRef(null)
    const footerPara = useRef(null)
    const buttonPara = useRef(null)
    const rightFooterPara = useRef(null)
    const designref = useRef(null)
    const nameRef = useRef(null)
    const basedInref = useRef(null)
    const sharjahRef = useRef(null)
    const AllRightsref = useRef(null)
    const Avaibleref = useRef(null)
    const freelanceref = useRef(null)
    const footerContainerRef = useRef(null)

    const handleWhatsAppClick = () => {
        const phoneNumber = "971568936869";
        const message = "Hey Anas! I came across your portfolio and would like to talk about a project.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");


    }

    useGSAP(() => {
        document.fonts.ready.then(() => {

            const mm = gsap.matchMedia();

            // =========================
            // MOBILE
            // =========================

            mm.add("(max-width: 599px)", () => {

                SplitText.create(footerPara.current, {
                    type: "lines",
                    mask: "lines",
                    autoSplit: true,
                    aria: "auto",

                    onSplit: (self) => {

                        gsap.set(self.lines, {
                            y: 100,
                            transformOrigin: "center center",
                            visibility: "hidden"
                        });

                        gsap.to(self.lines, {
                            scrollTrigger: {
                                trigger: footer.current,
                                start: "top bottom",
                                endTrigger: footer.current,
                                end: "bottom center",
                                scrub: 0.8,
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
                });

            });

            //! FooterPara SplitText Animation
            SplitText.create(footerPara.current, {
                type: "lines, chars",
                mask: "lines",
                autoSplit: true,
                aria: "auto",
                onSplit: (self) => {
                    gsap.set(self.lines, {
                        y: 200,
                        visibility: "hidden",
                        transformOrigin: "center center"
                    })
                    gsap.to(self.lines, {
                        scrollTrigger: {
                            trigger: rightFooterPara.current,
                            start: "center bottom",
                            endTrigger: footerName.current,
                            end: "top bottom",
                            scrub: true,
                        },
                        y: 0,
                        ease: "power1.out",
                        visibility: "visible",
                        stagger: {
                            each: 0.09,
                            from: "end"
                        }
                    })
                }
            })


            //! FooterName SplitText Animation
            SplitText.create(footerName.current, {
                type: "lines, chars",
                mask: "lines",
                autoSplit: true,
                aria: "auto",
                onSplit: (self) => {
                    gsap.set(self.chars, {
                        y: 200,
                        visibility: "hidden",
                        transformOrigin: "center center"
                    })
                    gsap.to(self.chars, {
                        scrollTrigger: {
                            trigger: footerName.current,
                            start: "center bottom",
                            endTrigger: footerContainerRef.current,
                            end: "bottom bottom",
                            scrub: true
                        },
                        y: 0,
                        visibility: "visible",
                        stagger: {
                            each: 0.08,
                            from: "center"
                        }
                    })
                }
            })

            const FooterTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: footerName.current,
                    start: "bottom bottom",
                    endTrigger: footer.current,
                    end: "bottom bottom",
                }
            })

            const FooterSplitTextAnimation = (target, vars, position) => {
                SplitText.create(target.current, {
                    type: "lines",
                    mask: "lines",
                    autoSplit: true,
                    aria: "auto",
                    onSplit: (self) => {
                        gsap.set(self.lines, {
                            y: 200,
                            visibility: "hidden",
                            transformOrigin: "center center"
                        })
                        FooterTimeline.to(self.lines, vars, position)
                    }
                })
            }

            FooterSplitTextAnimation(designref, {
                y: 0,
                visibility: "visible",
                delay: 0.2,
                ease: "power1.out",
            }, "F")
            FooterSplitTextAnimation(nameRef, {
                y: 0,
                visibility: "visible",
                delay: 0.2,
                ease: "power1.out",
            }, "F")
            FooterSplitTextAnimation(basedInref, {
                y: 0,
                visibility: "visible",
                delay: 0.2,
                ease: "power1.out",
            }, "F")
            FooterSplitTextAnimation(sharjahRef, {
                y: 0,
                visibility: "visible",
                delay: 0.2,
                ease: "power1.out",
            }, "F")
            FooterSplitTextAnimation(AllRightsref, {
                y: 0,
                visibility: "visible",
                delay: 0.2,
                ease: "power1.out",
            }, "F")
            FooterSplitTextAnimation(Avaibleref, {
                y: 0,
                visibility: "visible",
                delay: 0.2,
                ease: "power1.out",
            }, "F")
            FooterSplitTextAnimation(freelanceref, {
                y: 0,
                visibility: "visible",
                delay: 0.2,
                ease: "power1.out",
            }, "F")




            SplitText.create
        })
    }, { scope: footer })
    return (
        <>

            <div className="Footer" ref={footer} id="connect">
                <div className="FooterContainer" ref={footerContainerRef}>
                    <div className="TopFooterContainer">
                        <div className="LeftTopFooterContainer" ref={footerContainerLeftTop}>
                            <p ref={footerPara}>Got something you want to build?
                                <br />Let’s make it happen. My inbox is
                                always open.</p>
                            {/* <button ref={buttonPara}>Email Me</button> */}
                            {/* <button ref={buttonPara} className="EmailMeButton">
                                <span className="EmailMeDefault">Email Me</span>

                                <span className="EmailMeMarquee" aria-hidden="true">
                                    <span className="EmailMeMarqueeTrack">
                                        <span>Email Me&nbsp; · &nbsp;</span>
                                        <span>Email Me&nbsp; · &nbsp;</span>
                                        <span>Email Me&nbsp; · &nbsp;</span>
                                        <span>Email Me&nbsp; · &nbsp;</span>
                                    </span>

                                    <span className="EmailMeMarqueeTrack">
                                        <span>Email Me&nbsp; · &nbsp;</span>
                                        <span>Email Me&nbsp; · &nbsp;</span>
                                        <span>Email Me&nbsp; · &nbsp;</span>
                                        <span>Email Me&nbsp; · &nbsp;</span>
                                    </span>
                                </span>
                            </button> */}

                            <button onClick={handleWhatsAppClick} ref={buttonPara} className="EmailMeButton">
                                <span className="EmailMeDefault">
                                    Lets Talk
                                </span>

                                <span className="EmailMeMarquee" aria-hidden="true">
                                    <span className="EmailMeMarqueeTrack">

                                        <span className="EmailMeMarqueeItem">
                                            MESSAGE ME ON WHATSAPP
                                            <svg
                                                className="WhatsAppMarqueeIcon"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 9H17M7 13H11M22 12C22 17.5228 17.5228 22 12 22H3.10288C2.67314 22 2.44361 21.4937 2.72681 21.1705L4.73812 18.875C3.04094 17.0829 2 14.663 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        <span className="EmailMeMarqueeItem">
                                            MESSAGE ME ON WHATSAPP
                                            <svg
                                                className="WhatsAppMarqueeIcon"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 9H17M7 13H11M22 12C22 17.5228 17.5228 22 12 22H3.10288C2.67314 22 2.44361 21.4937 2.72681 21.1705L4.73812 18.875C3.04094 17.0829 2 14.663 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 2 22 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        <span className="EmailMeMarqueeItem">
                                            MESSAGE ME ON WHATSAPP
                                            <svg
                                                className="WhatsAppMarqueeIcon"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 9H17M7 13H11M22 12C22 17.5228 17.5228 22 12 22H3.10288C2.67314 22 2.44361 21.4937 2.72681 21.1705L4.73812 18.875C3.04094 17.0829 2 14.663 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 2 22 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        <span className="EmailMeMarqueeItem">
                                            MESSAGE ME ON WHATSAPP
                                            <svg
                                                className="WhatsAppMarqueeIcon"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 9H17M7 13H11M22 12C22 17.5228 17.5228 22 12 22H3.10288C2.67314 22 2.44361 21.4937 2.72681 21.1705L4.73812 18.875C3.04094 17.0829 2 14.663 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 2 22 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        {/* DUPLICATE */}
                                        <span className="EmailMeMarqueeItem">
                                            MESSAGE ME ON WHATSAPP
                                            <svg
                                                className="WhatsAppMarqueeIcon"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 9H17M7 13H11M22 12C22 17.5228 17.5228 22 12 22H3.10288C2.67314 22 2.44361 21.4937 2.72681 21.1705L4.73812 18.875C3.04094 17.0829 2 14.663 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 2 22 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        <span className="EmailMeMarqueeItem">
                                            MESSAGE ME ON WHATSAPP
                                            <svg
                                                className="WhatsAppMarqueeIcon"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 9H17M7 13H11M22 12C22 17.5228 17.5228 22 12 22H3.10288C2.67314 22 2.44361 21.4937 2.72681 21.1705L4.73812 18.875C3.04094 17.0829 2 14.663 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 2 22 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        <span className="EmailMeMarqueeItem">
                                            MESSAGE ME ON WHATSAPP
                                            <svg
                                                className="WhatsAppMarqueeIcon"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 9H17M7 13H11M22 12C22 17.5228 17.5228 22 12 22H3.10288C2.67314 22 2.44361 21.4937 2 14.663 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 2 22 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        <span className="EmailMeMarqueeItem">
                                            MESSAGE ME ON WHATSAPP
                                            <svg
                                                className="WhatsAppMarqueeIcon"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7 9H17M7 13H11M22 12C22 17.5228 17.5228 22 12 22H3.10288C2.67314 22 2.44361 21.4937 2.72681 21.1705L4.73812 18.875C3.04094 17.0829 2 14.663 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 2 22 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                    </span>
                                </span>
                            </button>


                        </div>
                        <div className="RightTopFooterContainer" ref={rightFooterPara}>
                            <ul>
                                <li>
                                    <Link to="https://www.linkedin.com/in/md-anasdev/" target="_blank"><h1>Linkedin</h1></Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="2" viewBox="0 0 39 2" fill="none">
                                        <rect width="39" height="2" fill="#D9D9D9" />
                                    </svg>
                                </li>
                                <li>
                                    <Link to="https://github.com/mohd-anas-dev" target="_blank"><h1>GitHub</h1></Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="2" viewBox="0 0 39 2" fill="none">
                                        <rect width="39" height="2" fill="#D9D9D9" />
                                    </svg>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/_4nas.dxbb/?__pwa=1" target="_blank"><h1>Instagram</h1></Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="2" viewBox="0 0 39 2" fill="none">
                                        <rect width="39" height="2" fill="#D9D9D9" />
                                    </svg>
                                </li>
                                <li>
                                    <h1>Resume</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="2" viewBox="0 0 39 2" fill="none">
                                        <rect width="39" height="2" fill="#D9D9D9" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="BottomFooterContainer">
                        <div className="BottomFooterContainerName">
                            <h1 ref={footerName}>MOHAMMED ANAS</h1>
                        </div>


                        <div className="BottomFooterContainerDescription">
                            <div className="LeftBottomFooterContainerDescription">
                                <div className="LeftBottomDescContent">
                                    <div className="BottomFooterDescOne">
                                        <h1 ref={designref}>Design & Development</h1>
                                        <h2 ref={nameRef}>Mohd Anas.</h2>
                                    </div>
                                    <div className="BottomFooterDescTwo">
                                        <h1 ref={basedInref}>Based In</h1>
                                        <h2 ref={sharjahRef}>Sharjah, UAE</h2>
                                    </div>
                                </div>
                                <div className="RightsReserved">
                                    <h1 ref={AllRightsref}>All Rights Reserved © 2026</h1>
                                </div>
                            </div>



                            <div className="RightBottomFooterContainerDescription">
                                <div className="Availbleforwork">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                        <circle cx="2" cy="2" r="2" fill="#fe4d1d" />
                                    </svg>
                                    <h1 ref={Avaibleref}>Availble for Work</h1>
                                </div>
                                <div className="Freelance">
                                    <h1 ref={freelanceref}>Freelance, Full-time</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
