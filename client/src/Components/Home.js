import Slideshow from "./Slideshow"
import cherub from "../pngs/cherub1.png"

function Home(){
    


    return(
        <div id="home-page">
            <br/>
        <h1>Kaia Bergmann-Dean</h1>
        <ul className="links">
            <li><a href="https://www.linkedin.com/in/kaiabergmann-dean/">LinkedIn</a></li>
            <li><a href="https://github.com/kbergmanndean">GitHub</a></li>
            <li><a href="/resume">Resume</a></li>
            <li>Projects</li>
        </ul>
        <img className="cherub" id="cherub1" alt="cherub" src={cherub}/>
        <Slideshow/>
        </div>
    )
}

export default Home