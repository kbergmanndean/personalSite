import home from "../pngs/home.png"
import {useState, useEffect} from "react"

function Projects(){
    const [projects, setProjects]=useState([])

    useEffect(()=>{
        async function fetchProjects(){
            const res=await fetch(`http://localhost:3000/projects`);
            const projectData=await res.json();
            setProjects(projectData);
            console.log(projects)
            console.log(projectData)
        }
        fetchProjects();
    },[]);
    //display projects in iframes below

    return(
        <div>
            <br/>
            <a href="/">
                <img className="home-link" src={home}/>
            </a>
            <br/>
            <br/>
            <h1>Projects</h1>
            <br/>
            
            {/* {projects.length>0?
            projects.map((project)=>{
                <div><h1>Hello</h1><iframe src={projects[0].url}/></div>}):<h3>Content Loading</h3>}
           */}
            {projects.length>0?
            <div>
                <div id="medready-div">
                    <h2>{projects[0].name}</h2>
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