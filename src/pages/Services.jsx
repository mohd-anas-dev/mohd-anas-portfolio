import "../styles/Services.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import SplitText from "gsap/SplitText.js";
import { useRef } from "react";
const Services = () => {
    const skillsData = [
        {
            title: "Frontend Development",
            id: "01",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Next.js",
                "Tailwind",
                "GSAP",
                "Framer Motion",
                "Lenis",
                "SEO",
                "Git"
            ],
            pointers: [
                "Frontend Architecture",
                "Interactive Experiences",
                "Responsive Interfaces",
                "SEO foundations",
            ],
            description:
                "I build responsive, high-performance frontends that combine clean architecture with engaging interactions. Using React and Next.js, I create scalable interfaces with smooth animations, optimized performance, and a strong focus on usability and SEO."
        },

        {
            title: "Backend Development",
            id: "02",
            skills: [
                "Node.js",
                "Express.js",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
                "Supabase",
                "Firebase",
                "REST APIs",
                "Authentication",
                "JWT",
                "Git"
            ],
            pointers: [
                "Authentication & Security",
                "Database Architecture",
                "API Development",
            ],
            description:
                "I build reliable backend systems that handle APIs, authentication, databases, and server-side logic. I focus on creating secure, scalable, and efficient foundations that support smooth and dependable web applications."
        },

        {
            title: "Creative Development",
            id: "03",
            skills: [
                "GSAP",
                "ScrollTrigger",
                "SplitText",
                "Framer Motion",
                "Lenis",
                "SVG",
                "WebGL",
                "Micro Interactions",
                "Smooth Scroll"
            ],
            pointers: [
                "Scroll-Based Animation",
                "Immersive Experiences",
                "Motion & Interaction",
            ],
            description:
                "I create interactive experiences through motion, animation, and thoughtful interactions. I combine frontend development with creative experimentation to make websites feel more dynamic and engaging."
        },

        {
            title: "UI Design",
            id: "04",
            skills: [
                "Figma",
                "Wireframing",
                "Prototyping",
                "Typography",
                "Color Theory",
                "Design Systems",
                "Responsive Design",
                "User Flows"
            ],
            pointers: [
                "Interface Design",
                "Design Systems"
            ],
            description:
                "I design clean, purposeful interfaces that balance visual appeal with usability. I use Figma to explore layouts, interactions, and responsive structures before bringing them to life through code."
        },


    ];

    const ServiceHeader = useRef(null)
    const Services = useRef(null)
    const ServicesContainer = useRef(null)
    const LeftServicesContainer = useRef(null)

    const frontendRef = useRef(null)

    const serviceCardsRef = useRef([]);

    const missionContainer = useRef(null)
    const missionPara = useRef(null)
    gsap.registerPlugin(ScrollTrigger, SplitText)

    useGSAP(() => {
        document.fonts.ready.then(() => {

            

            SplitText.create(ServiceHeader.current, {
                type: "lines, chars",
                mask: "lines",
                autosSplit: true,
                aria: "auto",
                onSplit: (self) => {
                    gsap.set(self.chars, {
                        y: -200,
                        transformOrigin: "center center",
                        visibility: "hidden"
                    })

                    gsap.to(self.chars, {
                        scrollTrigger: {
                            trigger: Services.current,
                            start: "top bottom",
                            endTrigger: frontendRef.current,
                            end: "bottom center",
                            scrub: true,
                        },
                        y: 0,
                        ease: "power1.out",
                        visibility: "visible",
                        stagger: {
                            each: 0.08,
                            from: "center"
                        }
                    })
                }
            })

            SplitText.create(missionPara.current, {
                type: "lines, chars",
                mask: "lines",
                autoSplit: true,
                aria: "auto",
                onSplit: (self) => {
                    gsap.set(self.lines, {
                        y: -100,
                        visibility: "hidden",
                        transformOrigin: "center center"
                    })

                    gsap.to(self.lines, {
                        y: 0,
                        visibility: "visible",
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: missionContainer.current,
                            start: "center bottom",
                            endTrigger: missionContainer.current,
                            end: "120% bottom",
                            scrub: true,
                        },
                        stagger: {
                            each: 0.08,
                            from: "end"
                        }
                    })
                }
            })

        })

        const cards = serviceCardsRef.current;

        const overlayTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ServicesContainer.current,

                start: "top top",

                end: `+=${(cards.length - 1) * 100}%`,

                scrub: 0.8,

                pin: true,

                anticipatePin: 1,

                invalidateOnRefresh: true,

                // markers: true,
            }
        });

        cards.forEach((card, index) => {

            // Frontend stays in place
            if (index === 0) return;

            overlayTimeline.fromTo(
                card,
                {
                    yPercent: 120,
                    scaleY: 0.3,
                     filter: "blur(20px)"
                },
                {
                    yPercent: 0,
                    scaleY: 1,
                     filter: "blur(0px)",
                    ease: "power1.out",
                }
            );

        });
    }, { scope: Services })



    return (
        <>
            <div className="Services" ref={Services} id="services">
                <div className="ServicesHeader" ref={ServiceHeader}>
                    <h1>Services</h1>
                </div>

                <div className="ServicesContainer" ref={ServicesContainer}>
                    {skillsData.length != 0 ? (skillsData.map((elem, key) => {
                        return (
                            <>
                                <div className="ServicesContainerOne"
                                    key={elem.id}
                                    ref={(el) => {
                                        serviceCardsRef.current[key] = el;
                                    }}>
                                    <div className="LeftServicesContainer" ref={LeftServicesContainer}>
                                        <div className="TopLeftServicesContainer">
                                            <div className="TopLeftServiceHeader">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"><path d="M343.3 282.8A239 239 0 0 1 480 240c-50.8 0-98-15.8-136.8-42.8 8.4-46.5 30.6-91 66.5-127-36 36-80.4 58.2-127 66.5C255.9 98 240 50.8 240 0c0 50.8-15.8 98-42.8 136.8-46.5-8.4-91-30.6-127-66.5 36 36 58.2 80.4 66.5 127C98 224.1 50.8 240 0 240c50.8 0 98 15.8 136.8 42.8-8.4 46.5-30.6 91-66.5 127 36-36 80.4-58.2 127-66.6A239 239 0 0 1 240 480c0-50.8 15.8-98 42.8-136.8 46.5 8.4 91 30.6 127 66.5-36-36-58.2-80.4-66.5-127Z" ></path></svg>
                                                <h1 ref={elem.id === "01" ? frontendRef : null}>{elem.title}</h1>
                                            </div>
                                            <div className="TopLeftServicePointers">
                                                <ul>
                                                    {elem.pointers.map((pointer, index) => {
                                                        return (<li><span>({String(index + 1).padStart(2, "0")})</span><h1>{pointer}</h1></li>)
                                                    })}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="BottomLeftServicesContainer">
                                            <div className="BottomLeftServicesContainerTags">
                                                <ul>
                                                    {elem.skills.map((skill, index) => {
                                                        return (<li className="Tags" key={index}>{skill}</li>)
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="BottomLeftServicesContainerPara">
                                                <p>{elem.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="RightServicesContainer">
                                        <div className="TopRightServicesContainer">
                                        </div>
                                        <div className="BottomRightServicesContainer">
                                            <span>{elem.id}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })) : ""}


                </div>

                <div className="MyMissionContainer" ref={missionContainer}>
                    <div className="MyMissionContent">
                        <span className="missionheader">
                            <h1>My mission</h1>
                        </span>
                        <p ref={missionPara}>I seek to build seamless digital experiences
                            that solve real problems, support business goals,
                            and create lasting value.</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Services
