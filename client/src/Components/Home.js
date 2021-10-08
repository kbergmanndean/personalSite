import Slideshow from "./Slideshow"
import cherub1 from "../pngs/cherub1.png"
import raccoon from "../pngs/raccoon.png"
import cherub2 from "../pngs/cherub2.png"
import possum from "../pngs/possum.png"

function Home(){
    


    return(
        <div id="home-page">
            <br/>
        <h1>Kaia Bergmann-Dean</h1>
        <div id="linkedin-div">
            <img id="cherub1" alt="cherub" src={cherub1}/>
            <br/>
            <a href="https://www.linkedin.com/in/kaiabergmann-dean/">LinkedIn</a>
        </div>
        <div id="resume-div">
            <img id="possum" alt="possum" src={possum}/>
            <br/>
            <a href="/resume">Resume</a>
        </div>
        <div id="github-div">
            <img id="raccoon" alt="raccoon" src={raccoon}/>
            <br/>
            <a href="https://github.com/kbergmanndean">GitHub</a>
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