import {useState,useEffect} from "react"
import {Carousel} from 'react-bootstrap';

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
        console.log(artworks)
        console.log(artworks[0])
        
    },[]);

    return(
        <div>
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
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src={artworks[4].url} alt="Charles Burns drawing"/>
                        <div>
                            <p>{artworks[4].name}, {artworks[4].artist}</p>
                        </div>
                    </div>
                </div>
            </div>
            :<h4>Content Loading</h4>}
        </div>
        // <div>
        //     {artworks?
        // <Carousel>
        //     <Carousel.Item>
        //          <img
        //             className="d-block w-100"
        //             src={artworks[0].url}
        //             alt="Andrew Wyeth"
        //         />
        //         <Carousel.Caption>
        //              <h3>{artworks[0].name}, {artworks[0].artist}</h3>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={artworks[1].url}
        //             alt="Pieter Brueghel"
        //         />
        //         <Carousel.Caption>
        //             <h3>{artworks[1].name}, {artworks[1].artist}</h3>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={artworks[2].url}
        //             alt="Basquiat"
        //         />
        //         <Carousel.Caption>
        //             <h3>{artworks[2].name}, {artworks[2].artist}</h3>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
        // :<p>Content Loading</p>}
        // </div>
    )
}
export default Slideshow