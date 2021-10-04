import {Document, Page} from "react-pdf/dist/esm/entry.webpack";
import resume from "./resume.pdf"

function Resume(){
    return(
        <div>
            <h1>Resume</h1>
            <Document file={resume}>
                <Page/>
            </Document>
        </div>

    )
}

export default Resume