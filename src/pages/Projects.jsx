import "../styles/Projects.css"
import ZapLink from "../assets/projectPhotos/ZapLinkLinkdin.png"
import ClaioSpace from "../assets/projectPhotos/ClarioSpace.png"
import FocusFlow from "../assets/projectPhotos/FocusFlow.png"
import EchoBioNix from "../assets/projectPhotos/EchoBioNix.png"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import ScrollTrigger from "gsap/ScrollTrigger.js"
import gsap from "gsap"
import { Link } from "react-router-dom"


gsap.registerPlugin(SplitText, ScrollTrigger)
const Projects = () => {
    const ProjectsRef = useRef(null)
    const ProjectHeaderRef = useRef(null)
    const ProjectContainer = useRef(null)
    const ProjectContainerOne = useRef(null)

    // useGSAP(() => {
    //     document.fonts.ready.then(() => {

    //         //!Project Header Split Text Animation
    //         SplitText.create(ProjectHeaderRef.current, {
    //             type: "lines, chars",
    //             mask: "lines",
    //             autoSplit: true,
    //             aria: "auto",
    //             onSplit: (self) => {
    //                 gsap.set(self.chars, {
    //                     y: -200,
    //                     visibility: "hidden",
    //                     transformOrigin: "center center"
    //                 })
    //                 gsap.to(self.chars, {
    //                     scrollTrigger: {
    //                         trigger: ProjectHeaderRef.current,
    //                         start: "top bottom",
    //                         endTrigger: ProjectContainer.current,
    //                         end: "center bottom",
    //                         scrub: true,
    //                     },
    //                     y: 0,
    //                     visibility: "visible",
    //                     stagger: {
    //                         each: 0.08,
    //                         from: "center"
    //                     }
    //                 })
    //             }
    //         })

    //     })
    // }, { scope: ProjectsRef })

    useGSAP(() => {

    document.fonts.ready.then(() => {

        const mm = gsap.matchMedia();

        mm.add(
            {
                mobile: "(max-width: 599px)",
                desktop: "(min-width: 600px)"
            },
            (context) => {

                const { mobile } = context.conditions;

                SplitText.create(ProjectHeaderRef.current, {
                    type: "lines, chars",
                    mask: "lines",
                    autoSplit: true,
                    aria: "auto",

                    onSplit: (self) => {

                        gsap.set(self.chars, {
                            y: -200,
                            visibility: "hidden",
                            transformOrigin: "center center"
                        });

                        gsap.to(self.chars, {

                            scrollTrigger: {
                                trigger: ProjectHeaderRef.current,

                                // MOBILE
                                start: mobile
                                    ? "top 90%"
                                    : "top bottom",

                                end: mobile
                                    ? "bottom 40%"
                                    : "center bottom",

                                // YOUR ORIGINAL DESKTOP/LAPTOP SETTINGS
                                ...(mobile
                                    ? {}
                                    : {
                                        endTrigger: ProjectContainer.current
                                    }),

                                scrub: true,
                            },

                            y: 0,
                            visibility: "visible",

                            stagger: {
                                each: 0.08,
                                from: "center"
                            }

                        });

                    }
                });

            }
        );

    });

}, { scope: ProjectsRef });
    return (
        <>
            <div className="Projects" ref={ProjectsRef} id="projects">
                <div className="ProjectHeader" ref={ProjectHeaderRef}>
                    <h1>Projects</h1>
                </div>


                <div className="ProjectsContainer" ref={ProjectContainer}>
                    <Link to="https://zaplink-jco4.onrender.com/" target="_blank" rel="noopener noreferrer" className="ProjectsContainerOne" ref={ProjectContainerOne}>
                        <div className="LeftProjectsContainerOne">
                            <div className="LeftProjectsNumber">
                                <h1>01</h1>
                            </div>
                            <div className="LeftProjectType">
                                                                <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 5.5L5.5 18.5M18.5 5.5H8.5M18.5 5.5V15.5"   strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <h1>MERN</h1>
                            </div>
                        </div>
                        <div className="RightProjectsContainerOne">
                            <div className="RightProjectsContainerOneDetails">
                                <div className="ProjectHeaderTitle">
                                    <h1>ZapLink</h1>
                                </div>
                                <div className="ProjectDesc">
                                    <p>ZapLink is a powerful URL shortener with QR generation and secure authentication.</p>
                                </div>
                            </div>
                            <div className="RightProjectsContainerOneImages">
                                <img src={ZapLink} alt="ZapLink — Project" data-loader="critical" fetchPriority="high" />
                            </div>
                        </div>
                    </Link>


                    <Link to="https://clariospace-frontend.onrender.com/"  target="_blank" rel="noopener noreferrer" className="ProjectsContainerOne">
                        <div className="LeftProjectsContainerOne">
                            <div className="LeftProjectsNumber">
                                <h1>02</h1>
                            </div>
                            <div className="LeftProjectType">
                                <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 5.5L5.5 18.5M18.5 5.5H8.5M18.5 5.5V15.5"   strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <h1>MERN</h1>
                            </div>
                        </div>
                        <div className="RightProjectsContainerOne">
                            <div className="RightProjectsContainerOneDetails">
                                <div className="ProjectHeaderTitle">
                                    <h1>ClarioSpace</h1>
                                </div>
                                <div className="ProjectDesc">
                                    <p>ClarioSpace is an all-in-one platform for organizing, sharing, and collaborating on academic resources.</p>
                                </div>
                            </div>
                            <div className="RightProjectsContainerOneImages">
                                <img src={ClaioSpace} alt="ClarioSpace — Project" data-loader="lazy" loading="lazy" />
                            </div>
                        </div>
                    </Link>


                    <Link to="https://focusflow-todo.netlify.app/" target="_blank"  rel="noopener noreferrer" className="ProjectsContainerOne">
                        <div className="LeftProjectsContainerOne">
                            <div className="LeftProjectsNumber">
                                <h1>03</h1>
                            </div>
                            <div className="LeftProjectType">
                                                                <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 5.5L5.5 18.5M18.5 5.5H8.5M18.5 5.5V15.5"   strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <h1>Front - End<span></span></h1>
                            </div>
                        </div>
                        <div className="RightProjectsContainerOne">
                            <div className="RightProjectsContainerOneDetails">
                                <div className="ProjectHeaderTitle">
                                    <h1>FocusFlow</h1>
                                </div>
                                <div className="ProjectDesc">
                                    <p>FocusFlow is a simple ToDo app for creating, editing, completing, and saving tasks with LocalStorage.</p>
                                </div>
                            </div>
                            <div className="RightProjectsContainerOneImages">
                                <img src={FocusFlow} alt="FocusFlow — Project " data-loader="lazy" loading="lazy" />
                            </div>
                        </div>
                    </Link>


                    <Link to="https://echobionix.netlify.app/" target="_blank"  rel="noopener noreferrer"  className="ProjectsContainerOne">
                        <div className="LeftProjectsContainerOne">
                            <div className="LeftProjectsNumber">
                                <h1>04</h1>
                            </div>
                            <div className="LeftProjectType">
                                                                <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 5.5L5.5 18.5M18.5 5.5H8.5M18.5 5.5V15.5"   strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <h1>Landing Page</h1>
                            </div>
                        </div>
                        <div className="RightProjectsContainerOne">
                            <div className="RightProjectsContainerOneDetails">
                                <div className="ProjectHeaderTitle">
                                    <h1>EchoBioNix</h1>
                                </div>
                                <div className="ProjectDesc">
                                    <p>EchoBioNiX is a gesture-controlled prosthetic hand that uses flex sensors and servo motors to mimic natural finger movements.</p>
                                </div>
                            </div>
                            <div className="RightProjectsContainerOneImages">
                                <img src={EchoBioNix} alt="EchoBioNix — Project" data-loader="lazy" loading="lazy" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Projects
