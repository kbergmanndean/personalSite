import {useState,useEffect} from "react"


function Slideshow(){


const [artworks,setArtworks]=useState([])
const [work, setWork]=useState([])

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
        {/* <img src={work.url}/> */}
    {artworks.map((artwork)=><img src={artwork.url}/>)}  
    </div>
)
}
export default Slideshow