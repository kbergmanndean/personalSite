import Slideshow from "./Slideshow"
import cherub1 from "../pngs/cherub1.png"
import raccoon from "../pngs/raccoon.png"
import cherub2 from "../pngs/cherub2.png"
import possum from "../pngs/possum.png"
import linkedin from "../pngs/linkedin.png"
import github from "../pngs/github.png"

function Home(){
    


    return(
        <div id="home-page">
            <br/>
        <h1>Kaia Bergmann-Dean</h1>
            <br/>
        <div id="linkedin-div">
            <img id="cherub1" alt="cherub" src={cherub1}/>
            <br/>
            <img id="linkedin" alt="Linked In" src={linkedin}/>
            {/* <a href="https://www.linkedin.com/in/kaiabergmann-dean/">LinkedIn</a> */}
        </div>
        <div id="resume-div">
            <img id="possum" alt="possum" src={possum}/>
            <br/>
            <a href="/resume">Resume</a>
        </div>
        <div id="github-div">
            <img id="raccoon" alt="raccoon" src={raccoon}/>
            <br/>
            <img id="github" alt="GitHub" src={github}/>
            {/* <a href="https://github.com/kbergmanndean">GitHub</a> */}
        </div>
        <div id="projects-div">
            <img id="cherub2" alt="cherub" src={cherub2}/>
            <br/>
            <span>Projects</span>
        </div>
        <Slideshow/>
        </div>
    )
}

export default Home