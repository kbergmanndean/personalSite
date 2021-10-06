import pdf from "../resume.pdf"

function Resume(){
    return(
        <div id="resume-page">
            <br/>
            <a href="/">Home</a>
            <h1>Resume</h1>
            <iframe
                id="resume"
                title="file"
                src={pdf}
            />
        </div>

    )
}

export default Resume