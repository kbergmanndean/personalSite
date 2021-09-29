import {Document} from "react-pdf";
import resume from "../resume.pdf"

function Resume(){
    return(
        <div>
            <h1>Resume</h1>
            <Document file={resume} >Resume</Document>
        </div>

    )
}

export default Resume