import Slideshow from "./Slideshow"
import cherub from "../pngs/cherub1.png"
import raccoon from "../pngs/raccoon.png"

function Home(){
    


    return(
        <div id="home-page">
            <br/>
        <h1>Kaia Bergmann-Dean</h1>
    
        
        <a href="/resume">Resume</a>
        <span>Projects</span>
        <div id="linkedin-div">
            <img id="cherub1" alt="cherub" src={cherub}/>
            <br/>
            <a href="https://www.linkedin.com/in/kaiabergmann-dean/">LinkedIn</a>
        </div>
        <div id="github-div">
            <img id="raccoon" alt="raccoon" src={raccoon}/>
            <br/>
            <a href="https://github.com/kbergmanndean">GitHub</a>
        </div>
        <Slideshow/>
        </div>
    )
}

export default Home