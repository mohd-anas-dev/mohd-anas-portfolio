import "../ui/Loader.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"
import SplitText from "gsap/SplitText.js"
import { useRef } from "react"
import { preloadAssets } from "../../lib/utils/preloadAssets"

gsap.registerPlugin(SplitText)


const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)



  const loaderParaRef = useRef(null)
  const loaderContainer = useRef(null)
  const headerRef = useRef(null)
  const counterRef = useRef(null)

  useGSAP(() => {
    const loaderTimeline = gsap.timeline()

    const loadAssets = async () => {

      await preloadAssets((progress) => {
        setProgress(progress)
      })

      loaderTimeline.to(loaderContainer.current, {
        yPercent: -100,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          onComplete?.()
        }
      })
    }
    loadAssets()

    const createSplitTextAnimation = (target, vars, position) => {
      SplitText.create(target.current, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        aria: "auto",
        onSplit: (self) => {
          loaderTimeline.from(self.lines, vars, position)
        }
      })
    }

    document.fonts.ready.then(() => {
      createSplitTextAnimation(loaderParaRef, {
        opacity: 0,
        y: "100%",
        duration: 0.5,
        stagger: {
          each: 0.2,
          from: "end"
        },
        delay: "0.3",
        ease: "power1.out",
      }, "l")
    })



  }, { scope: loaderContainer })



  return (
    <>
      <div className="Loader">
        <div className="LoaderContainer" ref={loaderContainer}>
          <div className="TopLoader"></div>
          <div className="BottomLoader">
            <div className="LoadingComponent">
              <div className="loadContent">
                <h1 ref={headerRef}>{`< MohdAnas />`}</h1>
                <span ref={counterRef}>{progress}%</span>
              </div>
            </div>
            <div className="progressBar">
              <div className="progressBarcontent">
                <p ref={loaderParaRef}>Independent creative developer, crafting digital experiences through code, motion, interaction and visual design.</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="1361" height="5" viewBox="0 0 1361 5" fill="none">
                  <rect className="svgparent" width="1361" height="5" fill="#ADADAD" />
                  <rect
                    className="svgChild"
                    width="1361"
                    height="5"
                    fill="#C23510"
                    style={{
                      transform: `scaleX(${progress / 100})`,
                      transformOrigin: "left center"
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Loader
