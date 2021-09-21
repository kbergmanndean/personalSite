import {useEffect, useState} from "react"

function Home(){
    const [artworks,setArtworks]=useState([])

    useEffect(()=>{
        async function fetchArt(){
            const res= await fetch (`http://localhost:3000/artworks`);
            const artworkData=await res.json();
            setArtworks(artworkData);
        }
        fetchArt();
    },[]);


    return(
        <div>
        <h1>Kaia Bergmann-Dean</h1>
        <ul>
            <li><a href="https://www.linkedin.com/in/kaiabergmann-dean/">LinkedIn</a></li>
            <li><a href="https://github.com/kbergmanndean">GitHub</a></li>
            <li><a>Resume</a></li>
            <li><a>Projects</a></li>
        </ul>
        </div>
    )
}

export default Home