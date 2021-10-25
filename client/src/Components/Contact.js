import home from "../pngs/home.png"
import cherub from "../pngs/cherub3.png"

function Contact(){
    return(
        <div id="contact-page">
            <br/>
            <a href="/">
                <img className="home-link" src={home}/>
            </a>
            <br/>
            <br/>
            <br/>
            <h1>Contact Me</h1>
            <br/>
            <a href="mailto:kbergmanndean@gmail.com">
                <img src={cherub} id="cherub3" className="link"/>
                
                Email me at kbergmanndean@gmail.com
            </a>
            
        </div>
    )
}

export default Contact