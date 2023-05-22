import GalleryGlass from '../GalleryGlass/GalleryGlass'
import classes from './GalleryPainting.module.scss'

const GalleryPainting = ({paintings,theme}) => {

if(!paintings.length){
    return <GalleryGlass theme={theme}/>
}
    return(
            <div className={classes.gallery_content}>
                {paintings.map( (painting) =>{
                    return (
                        <div key={painting.id} className={classes.gallery_content__image}>
                                <img src={`https://test-front.framework.team` + painting.imageUrl} alt="gallery" />  
                            <div className={classes.gallery_content__image_text}>
                                <h1>{painting.name}</h1>
                                <div className={classes.gallery_content__image_text__block}>
                                    <p>Author: <span>{painting.author}</span></p>
                                    <p>Created: <span>{painting.created}</span></p>
                                    <p>Location: <span>{painting.location}</span></p>
                                </div>                     
                            </div>                         
                        </div>
                    )
                })}
            </div>
    )
}

export default GalleryPainting