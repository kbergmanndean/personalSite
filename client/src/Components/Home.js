import Slideshow from "./Slideshow"

function Home(){
    


    return(
        <div id="home-page">
        <h1>Kaia Bergmann-Dean</h1>
        <ul className="links">
            <li><a href="https://www.linkedin.com/in/kaiabergmann-dean/">LinkedIn</a></li>
            <li><a href="https://github.com/kbergmanndean">GitHub</a></li>
            <li><a href="/resume">Resume</a></li>
            <li>Projects</li>
        </ul>
        <Slideshow/>
        </div>
    )
}

export default Home