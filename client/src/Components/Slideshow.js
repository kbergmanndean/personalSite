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
    },[]);

    return(
        // <div>
        //     {artworks.length>0?
        //     <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        //         <div className="carousel-inner">
        //             <div className="carousel-item active">
        //                 <img className="d-block w-100 img-fluid" src={artworks[0].url} alt="Wyeth painting"/>
        //                 <div>
        //                     <p>{artworks[0].name}, {artworks[0].artist}</p>
        //                 </div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100 img-fluid" src={artworks[1].url} alt= "Bruegel painting"/>
        //                 <div>
        //                     <p>{artworks[1].name}, {artworks[1].artist}</p>
        //                 </div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100 img-fluid" src={artworks[2].url} alt="Basquiat painting"/>
        //                 <div>
        //                     <p>{artworks[2].name}, {artworks[2].artist}</p>
        //                 </div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100 img-fluid" src={artworks[3].url} alt="Henry Darger painting"/>
        //                 <div>
        //                     <p>{artworks[3].name}, {artworks[3].artist}</p>
        //                 </div>
        //             </div>
        //             <div className="carousel-item">
        //                 <img className="d-block w-100 img-fluid" src={artworks[4].url} alt="Charles Burns drawing"/>
        //                 <div>
        //                     <p>{artworks[4].name}, {artworks[4].artist}</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     :<h4>Content Loading</h4>}
        // </div>
        <Carousel>
            <Carousel.Item>
                 <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                     <h3>First slide label</h3>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Slideshow