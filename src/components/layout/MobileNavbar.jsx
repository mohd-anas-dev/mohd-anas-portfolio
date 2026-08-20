import "../ui/MobileNavbar.css";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText.js";
import { lenis } from "./SmoothScroll.jsx";
import { Link } from "react-router-dom";


gsap.registerPlugin(SplitText);

const MobileNavbar = ({ isloaded }) => {
    const navbarRef = useRef(null);
    const menuPanelRef = useRef(null);

    const menuRef = useRef(null);
    const closeRef = useRef(null);

    const textTimeline = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);
    const [uaeTime, setuaeTime] = useState("")

    const scrollToSection = (id) => {
        setMenuOpen(false)
        if (!lenis) return;

        gsap.delayedCall(0.5, () => {
            lenis.scrollTo(id, {
                duration: 3,
            });
        })
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    /* =================================
       NAVBAR INTRO
    ================================= */

    useGSAP(() => {
        if (!isloaded) return;

        gsap.from(navbarRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power1.out",
        });
    }, [isloaded]);


    /* =================================
       SPLIT TEXT
    ================================= */

    useGSAP(() => {
        if (!menuRef.current || !closeRef.current) return;

        const menuSplit = SplitText.create(menuRef.current, {
            type: "chars",
        });

        const closeSplit = SplitText.create(closeRef.current, {
            type: "chars",
        });

        // Initial positions

        gsap.set(menuSplit.chars, {
            y: 0,
        });

        gsap.set(closeSplit.chars, {
            y: 50,
        });

        // Timeline

        textTimeline.current = gsap.timeline({
            paused: true,
        });

        textTimeline.current
            .to(menuSplit.chars, {
                y: -50,
                duration: 0.5,
                ease: "power1.out",
                stagger: {
                    each: 0.0250,
                    from: "end"
                },
            }, 0)

            .to(closeSplit.chars, {
                y: 0,
                duration: 0.5,
                ease: "power1.out",
                stagger: {
                    each: 0.0250,
                    from: "end"
                },
            }, 0);

        return () => {
            textTimeline.current?.kill();

            menuSplit.revert();
            closeSplit.revert();
        };

    }, []);


    /* =================================
       PLAY / REVERSE
    ================================= */

    useGSAP(() => {
        if (!textTimeline.current) return;

        if (menuOpen) {
            textTimeline.current.play();
        } else {
            textTimeline.current.reverse();
        }

    }, [menuOpen]);


    /* =================================
       MENU PANEL
    ================================= */




    useGSAP(() => {
        if (!menuPanelRef.current) return;
        gsap.to(menuPanelRef.current, {
            yPercent: menuOpen ? 0 : 100,
            duration: menuOpen ? 0.8 : 0.7,
            ease: "power1.inOut"
        });
    }, { dependencies: [menuOpen] });


    useEffect(() => {
        const updateTime = () => {
            const time = new Intl.DateTimeFormat("en-GB", {
                timeZone: "Asia/Dubai",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            }).format(new Date())
            setuaeTime(time)
        };

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <div ref={navbarRef} className={`MobileNavbar ${isloaded ? "MobileNavbarReady" : ""}`} >
                <div className="MobileNavbarContainer">

                    <button type="button" className="MobileLogo" onClick={() => scrollToSection("#home")} > &lt;MohdAnas/&gt;</button>
                    <button type="button" className="MobileMenuButton" onClick={toggleMenu} >

                        <span ref={menuRef} className="MenuText">MENU</span>
                        <span ref={closeRef} className="CloseText">CLOSE</span>

                    </button>

                </div>
            </div>


            {/* MENU PANEL */}

            <div ref={menuPanelRef} className={`MobileMenuPanel ${menuOpen ? "menuOpen" : ""}`}>
                <>
                    <div className="MobileMenuSheet">
                        <div className="MobileMenuSheetOne">
                            <div className="SheetOneContents">
                                <div className="LeftSheetOneContents"></div>
                                <div className="RightSheetOneContents">
                                    <p>SHARJAH, UAE: </p>
                                    <p>{`[GMT+4] ${uaeTime}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="MobileMenuSheetTwo">
                            <div className="SheetTwoContents">
                                <ul>
                                    <li onClick={() => scrollToSection("#about")}>ABOUT ME</li>
                                    <li onClick={() => scrollToSection("#projects")}>PROJECTS</li>
                                    <li onClick={() => scrollToSection("#services")}>SERVICES</li>
                                    <li onClick={() => scrollToSection("#connect")}>CONNECT</li>
                                </ul>
                            </div>
                        </div>
                        <div className="MobileMenuSheetThree">
                            <div className="SheetThreeContents">
                                <div className="TopSheetThreeContents">
                                    <ul>
                                        <li><Link to="https://www.linkedin.com/in/md-anasdev/" target="_blank">LINKEDIN</Link></li>
                                        <li><Link to="https://github.com/mohd-anas-dev" target="_blank">GITHUB</Link></li>
                                        <li><Link to="https://www.instagram.com/_4nas.dxbb/" target="_blank">INSTAGRAM</Link></li>
                                    </ul>
                                </div>
                                <div className="MiddleSheetThreeContents">
                                    <h1>+971 56 893 6869</h1>
                                    <h1>mdanas.dev@gmail.com</h1>
                                </div>
                                <div className="BottomSheetThreeContents">
                                    <ul>
                                        <li>
                                            <div className="LeftMostBottomSheetThreeContents">
                                                <h1>Design & Development</h1>
                                                <h2>Mohd Anas</h2>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="MiddleMostBottomSheetThreeContents">
                                                <h1>All Rights Reserved @ 2026</h1>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="RightMostBottomSheetThreeContents">
                                                <h1>Available for Work</h1>
                                                <h2>Freelance, Full-time</h2>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            </div>
        </>
    );
};

export default MobileNavbar;