import home from "../pngs/home.png"
import {useState, useEffect} from "react"
import skunk from "../pngs/skunk.png"

function Projects(){
    const [projects, setProjects]=useState([])

    useEffect(()=>{
        async function fetchProjects(){
            const res=await fetch(`https://kb-d.herokuapp.com/projects`);
            const projectData=await res.json();
            setProjects(projectData);
            console.log(projectData)
        }
        fetchProjects();
    },[]);
    

    return(
        <div>
            <br/>
            <a href="/">
                <img className="home-link" src={home}/>
                <img className="link" id="skunk" src={skunk}/>
            </a>
            <br/>
            <h1>Projects</h1>
            <br/>
            <br/>
            <br/>
            {projects.length>0?
            <div>
                <div id="medready-div">
                    <h2>{projects[0].name}</h2>
                    <p>A web application designed to help the user keep track of their prescription medications. I used an external API of medications from the FDA. The MedReady bird logo and medicine bottles are original&nbsp;illustrations. </p>
                    <iframe className="project" src={projects[0].url}/>
                    {/* <iframe className="project" src={projects[3].url}/> */}
                </div>
                <br/>
                <br/>
                <div id="museum-div">
                    <h2>{projects[1].name}</h2>
                    <p>An interactive museum of art by women artists. Can be explored by search or filter, as well as commented on and added to. The color scheme is inspired by the Yayoi Kusama installation that serves as the background for the Home&nbsp;page.</p>
                    <iframe className="project" src={projects[1].url}/>
                </div>
                <br/>
                <br/>
                <div id="planet-div">
                    <h2>Flatiron {projects[2].name}</h2>
                    <h3>with {projects[2].partner}</h3>
                    <p>An online planetarium with multiple sorting and filtering options and several visual&nbsp;models.</p>
                    <iframe className="project" src={projects[2].url}/>
                </div>
            </div>
            :<h3>Content Loading</h3>}       
        </div>

    )
}

export default Projects