function Resume(){
    return(
        <div>
            <h1>Resume</h1>
            {/* <iframe src="../resume.pdf" width="50%" height="500pt" title="Resume">Resume</iframe> */}
            <iframe
                title="file"
                style={{ width: '100%', height: '100%' }}
                src="../resume.pdf"
            />
        </div>

    )
}

export default Resume