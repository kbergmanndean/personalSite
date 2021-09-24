import {useState,useEffect} from "react"


function Slideshow(){
    const [artworks,setArtworks]=useState([])
    const [work, setWork]=useState([])

    useEffect(()=>{
        async function fetchArt(){
            const res= await fetch (`http://localhost:3000/artworks`);
            const artworkData=await res.json();
            setArtworks(artworkData);
            setWork(artworkData[0])
        }
        fetchArt();
        // let i
        // for (i=0;i<artworks.length-1;i++){
        //     setWork(artworks[i])
        // }
    },[]);

    return(
        <div>
            <img src={work.url}/>
            {/* {artworks.map((artwork)=><img src={artwork.url} key={artwork.id}/>)}   */}
        </div>
    )
}
export default Slideshow