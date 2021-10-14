import pdf from "../resume.pdf"
import home from "../pngs/home.png"

function Resume(){
    return(
        <div>
            <br/>
            <a href="/">
                <img src={home}/>
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