import {useState, useEffect} from "react"

function Projects(){
    const [projects, setProjects]=useState([])

    useEffect(()=>{
        async function fetchProjects(){
            const res=await fetch(`http://localhost:3000/projects`);
            const projectData=await res.json();
            
        }
    },[])


    //function to fetch projects,
    //put projects in state
    //display projects in iframes below




    return(
        <div>
        <h1>Projects</h1>
        <iframe src="https://www.youtube.com/embed/yDaJDPpVqiw"/>
        </div>

    )
}

export default Projects