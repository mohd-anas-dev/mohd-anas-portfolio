import "./App.css"
import Error404 from "./components/layout/Error404"
import About from "./pages/About"
import Footer from "./pages/Footer"
import SmoothScroll from "./components/layout/SmoothScroll.jsx"
import Hero from "./pages/Hero"
import Process from "./pages/Process"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Loader from "./components/layout/loader.jsx"
import Navbar from "./components/layout/Navbar.jsx"

import { Routes, Route } from "react-router-dom"
import { useState, useRef } from "react"


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [heroAnimationCompleted, setHeroAnimationCompleted] = useState(false)

  const heroRef = useRef(null)
  const loaderRef = useRef(null)

  return (
    <>
      <Loader onComplete={() => setIsLoaded(true)} />

      <Navbar
        isloaded={heroAnimationCompleted}
        ref={loaderRef}
      />


      <Hero
        isLoaded={isLoaded}
        ref={heroRef}
        onCompleteHeroAnimation={() =>
          setHeroAnimationCompleted(true)
        }
      />

      <About />
      <Projects />
      <Services />
      <Process />
      <Footer />
    </>
  )
}


const App = () => {
  return (
    <>
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App