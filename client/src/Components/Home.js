import Slideshow from "./Slideshow"
import cherub1 from "../pngs/cherub1.png"
import raccoon from "../pngs/raccoon.png"
import cherub2 from "../pngs/cherub2.png"
import possum from "../pngs/possum.png"
import linkedin from "../pngs/linkedin.png"
import github from "../pngs/github.png"
import resume from "../pngs/resume2.png"
import projects from "../pngs/projects.png"

function Home(){
    


    return(
        <div id="home-page">
            <br/>
        <h1>Kaia Bergmann-Dean</h1>
            <br/>
        <div id="linkedin-div">
            <img id="cherub1" alt="cherub" src={cherub1}/>
            <br/>
            <img id="linkedin-link" alt="Linked In" src={linkedin}/>
            {/* <a href="https://www.linkedin.com/in/kaiabergmann-dean/">LinkedIn</a> */}
        </div>
        <div id="projects-div">
            <img id="cherub2" alt="cherub" src={cherub2}/>
            <br/>
            <img id="projects-link" alt="Linked" src={projects}/>
        </div>
        <div id="github-div">
            <img id="raccoon" alt="raccoon" src={raccoon}/>
            <br/>
            <img id="github-link" alt="GitHub" src={github}/>
            {/* <a href="https://github.com/kbergmanndean">GitHub</a> */}
        </div>
        <div id="resume-div">
            <img id="possum" alt="possum" src={possum}/>
            <br/>
            <img id="resume-link" alt="Resume link" src={resume}/>
            {/* <a href="/resume">Resume</a> */}
        </div>
        <Slideshow/>
        </div>
    )
}

export default Home