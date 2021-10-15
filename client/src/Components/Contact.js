import home from "../pngs/home.png"
function Contact(){
    return(
        <div>
            <br/>
            <a href="/">
                <img className="home-link" src={home}/>
            </a>
            <br/>
            <br/>
            <br/>
            <div id="contact-page">
                <h1>Contact Me</h1>
                <br/>
                <p>Email: kbergmanndean@gmail.com</p>
                <a href="mailto: kbergmanndean@gmail.com">Send Email</a>
            </div>

        </div>
    )
}
export default Contact