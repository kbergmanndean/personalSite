import {useState,useEffect} from "react"


function Slideshow(){
    const [artworks,setArtworks]=useState([])
    const [work, setWork]=useState([])

    useEffect(()=>{
        async function fetchArt(){
            const res= await fetch (`http://localhost:3000/artworks`);
            const artworkData=await res.json();
            setArtworks(artworkData);
            // setWork(artworkData[0]);
            // let i=0
            // i<artworkData.length-1?
            //     i++:i=0;
            // setTimeout(()=>{setWork(artworkData[i])},2500);
            // console.log(i)
            // console.log(work)
            console.log(artworks)
        }
        fetchArt();
    },[]);

    return(
        <div>
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
                </div>
            </div>
            {/* <img src={work.url}/> */}
            {/* {artworks.map((artwork)=><img src={artwork.url} key={artwork.id}/>)}   */}
        </div>
    )
}
export default Slideshow