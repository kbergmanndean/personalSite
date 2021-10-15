import useHistory from "react-router"
import Slideshow from "./Slideshow"
import cherub1 from "../pngs/cherub1.png"
import raccoon from "../pngs/raccoon.png"
import cherub2 from "../pngs/cherub2.png"
import possum from "../pngs/possum.png"
import linkedin from "../pngs/linkedin.png"
import github from "../pngs/github.png"
import resume from "../pngs/resume2.png"
import projects from "../pngs/projects2.png"
import contact from "../pngs/contact.png"

function Home(){
    


    return(
        <div id="home-page">
            <br/>
        <h1>Kaia Bergmann-Dean</h1>
            <br/>
        <div id="linkedin-div">
            <a href="https://www.linkedin.com/in/kaiabergmann-dean/">
                <img id="cherub1" alt="cherub" src={cherub1}/>
                <br/>
                <img id="linkedin-link" alt="Linked In" src={linkedin}/>
            </a>
        </div>
        <div id="projects-div">
            <a href="/my-projects">
                <img id="cherub2" alt="cherub" src={cherub2}/>
                <br/>
                <img id="projects-link" alt="Linked" src={projects}/>
            </a>
        </div>
        <div id="github-div">
            <a href="https://github.com/kbergmanndean">
                <img id="raccoon" alt="raccoon" src={raccoon}/>
                <br/>
                <img id="github-link" alt="GitHub" src={github}/>
            </a>
        </div>
        <div id="resume-div">
            <a href="/resume">
                <img id="possum" alt="possum" src={possum}/>
                <br/>
                <img id="resume-link" alt="Resume link" src={resume}/>
            </a>
        </div>
        <Slideshow/>
        <div>
            <h2>Contact</h2>
        </div>
        </div>
    )
}

export default Home