import home from "../pngs/home.png"
import {useState, useEffect} from "react"

function Projects(){
    const [projects, setProjects]=useState([])

    useEffect(()=>{
        async function fetchProjects(){
            const res=await fetch(`https://kb-d.herokuapp.com/projects`);
            const projectData=await res.json();
            setProjects(projectData);
            console.log(projects)
            console.log(projectData)
        }
        fetchProjects();
    },[]);
    

    return(
        <div>
            <br/>
            <a href="/">
                <img className="home-link" src={home}/>
            </a>
            <br/>
            <br/>
            <br/>
            <h1>Projects</h1>
            <br/>
            {projects.length>0?
            <div>
                <div id="medready-div">
                    <h2>{projects[0].name}</h2>
                    <p>A web application designed to help the user keep track of their prescription medications. I used an external API of medications from the FDA. The MedReady bird logo and medicine bottles are original illustrations. </p>
                    <iframe className="project" src={projects[0].url}/>
                </div>
                <br/>
                <div id="museum-div">
                    <h2>{projects[1].name}</h2>
                    <iframe className="project" src={projects[1].url}/>
                </div>
            </div>
            :<h3>Content Loading</h3>}       
        </div>

    )
}

export default Projects