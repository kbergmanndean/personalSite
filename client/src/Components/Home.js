import Slideshow from "./Slideshow"
import cherub from "../pngs/cherub1.png"

function Home(){
    


    return(
        <div id="home-page">
            <br/>
        <h1>Kaia Bergmann-Dean</h1>
    
        <a href="https://github.com/kbergmanndean">GitHub</a>
        <a href="/resume">Resume</a>
        <span>Projects</span>
        <div id="linkedin-div">
        <img className="cherub" id="cherub1" alt="cherub" src={cherub}/>
        <br/>
        <a href="https://www.linkedin.com/in/kaiabergmann-dean/">LinkedIn</a>
        </div>
        <Slideshow/>
        </div>
    )
}

export default Home