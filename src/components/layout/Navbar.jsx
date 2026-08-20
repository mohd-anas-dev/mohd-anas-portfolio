import "../ui/Navbar.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText.js";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import { lenis } from "./SmoothScroll.jsx";
import MobileNavBar from "./MobileNavbar.jsx"

gsap.registerPlugin(SplitText, DrawSVGPlugin, ScrollTrigger);
const Navbar = ({ isloaded }) => {
    const navbarRef = useRef(null);
    const workRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const contactLineRef = useRef(null);

    const handleWhatsAppClick = () => {
        const phoneNumber = "971568936869";
        const message = "Hey Anas! I came across your portfolio and would like to talk about a project.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");


    }

    const scrollToSection = (id) => {
        if (!lenis) return;

        lenis.scrollTo(id, {
            duration: 2.5,
        });
    };

    useGSAP(
        () => {
            if (!isloaded) return;

            const NavBarTimeLine = gsap.timeline();

            NavBarTimeLine.from(".NavbarContainer", {
                opacity: 0,
                ease: "power1.inOut",
            });




            gsap.set(contactLineRef.current, { strokeDashoffset: 0 });
        },
        { scope: navbarRef, dependencies: [isloaded] },

    );

    const handleContactEnter = () => {
        gsap.killTweensOf(contactLineRef.current);
        gsap.fromTo(
            contactLineRef.current,
            { strokeDashoffset: 0 },
            {
                strokeDashoffset: -145,
                duration: 0.8,
                ease: "power1.out",
            }
        );

    };

    const handleContactLeave = () => {
        gsap.killTweensOf(contactLineRef.current);
        gsap.to(contactLineRef.current, {
            strokeDashoffset: 0,
            duration: 0.6,
            ease: "power1.out",
        });
    };



    const animateChars = (ref, direction) => {
        SplitText.create(ref.current, {
            type: "lines, chars",
            mask: "lines",
            autoSplit: true,
            aria: "auto",
            onSplit: (split) => {
                gsap.set(split.chars, {
                    y: direction === "enter" ? 150 : -150,
                    visibility: "hidden",
                    transformOrigin: "center center",
                });
                gsap.to(split.chars, {
                    y: 0,
                    visibility: "visible",
                    ease: "power3.out",
                    stagger: {
                        each: 0.03,
                        from: "end",
                    },
                });
            },
        });
    };

    const handleOnEnter = (ref) => {
        animateChars(ref, "enter");
    };

    const handleOnExit = (ref) => {
        animateChars(ref, "exit");
    };






    return (
        <>
        <div className="DesktopNavbar">
                        <div className={`Navbar ${isloaded ? "NavBarLoaderReady" : ""}`} ref={navbarRef}>
                <div className="NavbarContainer">
                    <div className="LeftNavbar">
                        <h1 onClick={() => scrollToSection("#home")} className="blendtext">{`<MohdAnas/>`}</h1>
                    </div>

                    <div className="RightNavbar">
                        <div className="oneNavbar">
                            <ul>
                                <li className="blendtext">
                                    <NavLink>
                                        <h1>01</h1>
                                        <h2
                                            ref={workRef}
                                            onClick={() => scrollToSection("#about")}
                                            onMouseEnter={() => handleOnEnter(workRef)}
                                            onMouseLeave={() => handleOnExit(workRef)}
                                        >
                                            ABOUT ME{" "}
                                        </h2>
                                    </NavLink>
                                </li>

                                <li className="blendtext">
                                    <NavLink>
                                        <h1>02</h1>
                                        <h2
                                            onClick={() => scrollToSection("#projects")}
                                            ref={aboutRef}
                                            onMouseEnter={() => handleOnEnter(aboutRef)}
                                            onMouseLeave={() => handleOnExit(aboutRef)}
                                        >
                                            PROJECTS
                                        </h2>
                                    </NavLink>
                                </li>

                                <li className="blendtext">
                                    <NavLink>
                                        <h1>03</h1>
                                        <h2
                                            ref={skillsRef}
                                            onClick={() => scrollToSection("#services")}
                                            onMouseEnter={() => handleOnEnter(skillsRef)}
                                            onMouseLeave={() => handleOnExit(skillsRef)}
                                        >
                                            SERVICES
                                        </h2>
                                    </NavLink>
                                </li>

                            </ul>
                        </div>



                        <div className="secondNavbar">
                            <li onClick={handleWhatsAppClick}>
                                <NavLink
                                    className="ContactLink"
                                    onMouseEnter={handleContactEnter}
                                    onMouseLeave={handleContactLeave}
                                >
                                    <h1 className="h1Contact">CONTACT ME</h1>

                                    <svg
                                        className="ContactArrow"
                                        width="19"
                                        height="19"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.5 5.5L5.5 18.5M18.5 5.5H8.5M18.5 5.5V15.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <svg
                                        className="ContactLine"
                                        viewBox="0 0 100 10"
                                        fill="none"
                                    >
                                        <path
                                            ref={contactLineRef}
                                            d="M1 5 H99"
                                            stroke="currentColor"
                                            strokeWidth="0.8"
                                            fill="none"
                                            pathLength="100"
                                            strokeDasharray="150 12"
                                            strokeDashoffset="0"
                                        />
                                    </svg>
                                </NavLink>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="MobileNavbarWrapper">
                <MobileNavBar  isloaded={isloaded}/>
            </div>

        </>
    );
};

export default Navbar;
