import pdf from "../resume.pdf"

function Resume(){
    return(
        <div>
            <br/>
            <a href="/">Home</a>
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