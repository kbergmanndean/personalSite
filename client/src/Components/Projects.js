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
    },[])
    //display projects in iframes below




    return(
        <div>
        <h1>Projects</h1>
        <iframe src="https://www.youtube.com/embed/yDaJDPpVqiw"/>
        </div>

    )
}

export default Projects