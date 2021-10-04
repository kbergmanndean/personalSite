import {Document, Page} from "react-pdf/dist/esm/entry.webpack";
import resume from "./resume.pdf"

function Resume(){
    return(
        <div className="resume-page">
            <div className="resume-item">
            <h1>Resume</h1>
            <Document file={resume}>
                <Page pageNumber={1}/>
            </Document>
            </div>
        </div>

    )
}

export default Resume