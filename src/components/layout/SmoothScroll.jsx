// import { useEffect } from "react"
// import Lenis from "lenis"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)
// const SmoothScroll = () => {

//     useEffect(() => {
//         const lenis = new Lenis({
//             duration:2.5,
//             smoothWheel: true,
//             syncTouch: false
//         })

//         lenis.on("scroll", ScrollTrigger.update);

//         const update = (time) => {
//             lenis.raf(time * 1000)
//         }

//         gsap.ticker.add(update);

//         gsap.ticker.lagSmoothing(0);

//         return () => {
//             gsap.ticker.remove(update);
//             lenis.destroy()
//         }
//     }, [])

//   return null
// }

// export default SmoothScroll


import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export let lenis;

const SmoothScroll = () => {
    useEffect(() => {
        lenis = new Lenis({
            duration: 2.2,
            smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(raf);

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(raf);
            lenis.destroy();
            lenis = null;
        };
    }, []);

    return null;
};

export default SmoothScroll;