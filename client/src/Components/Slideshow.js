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
                        <div class="carousel-caption d-none d-md-block">
                            <p>{artworks[0].name},{artworks[0].artist}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={artworks[1].url}/>
                        <div class="carousel-caption d-none d-md-block">
                            <p>{artworks[1].name},{artworks[1].artist}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={artworks[2].url}/>
                        <div class="carousel-caption d-none d-md-block">
                            <p>{artworks[2].name},{artworks[2].artist}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={artworks[3].url}/>
                        <div class="carousel-caption d-none d-md-block">
                            <p>{artworks[3].name},{artworks[3].artist}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={artworks[4].url}/>
                        <div class="carousel-caption d-none d-md-block">
                            <p>{artworks[4].name},{artworks[4].artist}</p>
                        </div>
                    </div>
                </div>
            </div>:
            <h4>Content Loading</h4>}
        </div>
    )
}
export default Slideshow