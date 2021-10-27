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
import contact from "../pngs/contactme2.png"
import bat from "../pngs/bat2.png"
import bats from "../pngs/bat4flipped.png"
import background from "../pngs/7pinksky.gif"

function Home(){
    


    return(
        <div id="home-page" 
        style={{backgroundImage: `url(${background})`}}
        >
            <br/>
            <h1 id="name">Kaia Bergmann-Dean</h1>
            <a href="/Contact-Me">
                <img id="contact-link" alt="Contact Link" src={contact}/>
                <img id="bat" alt="bat" className="link" src={bat}/>
                <img id="bats" alt="bats" src={bats}/>
            </a>
            {/* <img src={name} id="name"/> */}
            <div id="linkedin-div">
                <a href="https://www.linkedin.com/in/kaiabergmann-dean/" target="_blank">
                    <img id="cherub1" className="link" alt="cherub" src={cherub1}/>
                    <br/>
                    <img id="linkedin-link" alt="Linked In" src={linkedin}/>
                </a>
            </div>
            <div id="projects-div">
                <a href="/my-projects">
                    <img id="cherub2" alt="cherub" className="link" src={cherub2}/>
                    <br/>
                    <img id="projects-link" alt="Linked" src={projects}/>
                </a>
            </div>
            <div id="github-div">
                <a href="https://github.com/kbergmanndean" target="_blank">
                    <img id="raccoon" alt="raccoon" className="link" src={raccoon}/>
                    <br/>
                    <img id="github-link" alt="GitHub" src={github}/>
                </a>
            </div>
            <div id="resume-div">
                <a href="/resume">
                    <img id="possum" alt="possum" className="link" src={possum}/>
                    <br/>
                    <img id="resume-link" alt="Resume link" src={resume}/>
                </a>
            </div>
            <p>Full Stack Software Engineer with a background in Art History, Research, Environmental Conservation and Food Service. Sometimes I make art and music! </p>
            {/* <Slideshow/> */}
            <div>
           
            </div>
        </div>
    )
}

export default Home