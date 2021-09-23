function Slideshow({artworks}){



return(
    <div>
    {artworks.map((artwork)=><img src={artwork.url}/>)}  
    </div>
)
}
export default Slideshow