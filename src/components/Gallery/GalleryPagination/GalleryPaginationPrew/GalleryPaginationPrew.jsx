import classes from './GalleryPaginationPrew.module.scss'
import prewPageDark from '../../../../assets/images/prewPageDark.svg'
import prewPageWhite from '../../../../assets/images/prewPageWhite.svg'
import doblePageWhite from '../../../../assets/images/doblePageWhite.svg'
import doblePageDark from '../../../../assets/images/doblePageDark.svg'


const GalleryPaginationPrew = ({setPage, page, theme}) => {

    const doblePrevPage = () => {
        setPage(1)
    }
    const prevPage = () => {
        setPage(prev => prev - 1)
    }

    return(
        <>
                <button  
                className={ page === 1
                    ? `${classes.gallery_pagination__content_btn__doble_page} 
                       ${classes.gallery_pagination__content_btn__img__disabled}`
                    : classes.gallery_pagination__content_btn__doble_page} 
                onClick={doblePrevPage}>
                    {theme === 'light'
                    ? <img src={doblePageWhite} alt="doblePage" />
                    : <img src={doblePageDark} alt="doblePageDark" />
                    }
                </button>

                <button 
                disabled={page === 1} 
                className={ page === 1 
                    ? `${classes.gallery_pagination__content_btn__img} 
                       ${classes.gallery_pagination__content_btn__img__disabled}` 
                    :  classes.gallery_pagination__content_btn__img} 
                onClick={prevPage}>
                    {theme === 'light'
                    ? <img src={prewPageWhite} alt="prewPageWhite" />
                    : <img src={prewPageDark} alt="prewPageDark" />
                    }
                </button>
        </>
    )
}

export default GalleryPaginationPrew
