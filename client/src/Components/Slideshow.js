import {useState,useEffect} from "react"


function Slideshow(){
    const [artworks,setArtworks]=useState([])

    useEffect(()=>{
        async function fetchArt(){
            const res=await fetch (`http://localhost:3000/artworks`);
            const artworkData=await res.json();
            setArtworks(artworkData);
            console.log(artworks)
        }
        fetchArt();
    },[]);

    return(
        <div>
            {artworks.length>0?
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={artworks[0].url}/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={artworks[1].url}/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={artworks[2].url}/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={artworks[3].url}/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={artworks[4].url}/>
                    </div>
                </div>
            </div>:
            <h4>Content Loading</h4>}
        </div>
    )
}
export default Slideshow