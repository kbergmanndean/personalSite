import home from "../pngs/home.png"
import email from "../pngs/email.png"

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
                <a href="mailto: kbergmanndean@gmail.com">
                    <img id="email" src={email}/>
                </a>
            </div>

        </div>
    )
}
export default Contact