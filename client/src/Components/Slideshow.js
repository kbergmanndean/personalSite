import {useState,useEffect} from "react"

function Slideshow(){
    const [artworks,setArtworks]=useState([])

    useEffect(()=>{
        async function fetchArt(){
            const res=await fetch (`https://kb-d.herokuapp.com/artworks`);
            const artworkData=await res.json();
            setArtworks(artworkData);
            console.log(artworks)
    
        }
        fetchArt();
        console.log(artworks)
        console.log(artworks[0])
        
    },[]);

    return(
        <div id="carousel">
            {artworks.length>0?
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" id="inner">
                    <div className="carousel-item active" id="wyeth-item">
                        <img className="d-block w-100 img-fluid" id="wyeth" src={artworks[0].url} alt="Wyeth painting"/>
                        <div>
                            <p>{artworks[0].name}, {artworks[0].artist}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src={artworks[1].url} alt= "Bruegel painting"/>
                        <div>
                            <p>{artworks[1].name}, {artworks[1].artist}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src={artworks[2].url} alt="Basquiat painting"/>
                        <div>
                            <p>{artworks[2].name}, {artworks[2].artist}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src={artworks[3].url} alt="Henry Darger painting"/>
                        <div>
                            <p>{artworks[3].name}, {artworks[3].artist}</p>
                        </div>
                    </div>
                </div>
            </div>
            :<h4>Content Loading</h4>}
        </div>
    )
}
export default Slideshow