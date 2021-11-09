import pdf from "../resume.pdf"
import home from "../pngs/home.png"
import skunk from "../pngs/skunk.png"

function Resume(){
    return(
        <div>
            <br/>
            <a href="/">
                <img id="skunk" src={skunk}/>
                <img className="home-link" src={home}/>
            </a>
            <br/>
            <br/>
            <div id="resume-page">
            <h1>Resume</h1>
            <iframe
                id="resume"
                title="file"
                src={pdf}
            />
            </div>
        </div>

    )
}

export default Resume