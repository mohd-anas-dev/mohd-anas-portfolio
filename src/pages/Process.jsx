import "../styles/Process.css"

const Process = () => {
    return (
        <>
            <div className="Process">
                <div className="ProcessContainer">
                    <div className="ProcessContainerOne">
                        <div className="ProcessStep">
                            <h1>Development Process</h1>
                        </div>
                        <div className="Debrief">
                            <h1>Debrief</h1>
                            <p>I start by understanding your brand, goals, audience, and project requirements. We discuss your vision, needs, and timeline before moving forward.</p>
                        </div>
                    </div>

                    <div className="ProcessContainerTwo">
                        <div className="Research">
                            <h1>Research</h1>
                            <p>I research your industry, competitors, and audience to find opportunities. I also explore visual directions, typography, colors, and interactions that fit the brand.</p>
                        </div>
                        <div className="Ideation">
                            <h1>Design</h1>
                            <p>I turn the research into wireframes and visual concepts in Figma. After reviewing the direction together, I refine the design and prepare the final layouts for development.</p>
                        </div>
                    </div>


                    <div className="ProcessContainerThree">
                        <div className="Development">
                            <h1>Development</h1>
                            <p>I bring the approved design to life with clean, responsive, and high-performance code. I test across devices, refine interactions, and make sure everything works smoothly before launch.</p>
                        </div>
                        <div className="ProcessStep">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process
