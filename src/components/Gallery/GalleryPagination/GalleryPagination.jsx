/* eslint-disable react-hooks/exhaustive-deps */
import classes from './GalleryPagination.module.scss'
import { useEffect } from 'react'
import GalleryPaginationPrew from './GalleryPaginationPrew/GalleryPaginationPrew'
import GalleryPaginationNext from './GalleryPaginationNext/GalleryPaginationNext'

const GalleryPagination = ({pageNumbers, paginate, setPage, page, num, theme}) => {

    useEffect(() => {
        setPage(1)
    }, [num])

    return(
        <div className='gallery-pagination'>
            <div className={classes.gallery_pagination__content}>
                <GalleryPaginationPrew setPage={setPage} page={page} theme={theme}/>
                { pageNumbers.map(num => 
                    <button  
                        key={num}
                        onClick={ () => paginate(num)} 
                        className={ page === num 
                        ? classes.gallery_pagination__content_btn__active  
                        : page < 10
                        ? classes.gallery_pagination__content_btn__fz
                        : classes.gallery_pagination__content_btn } 
                        >
                        {num}
                    </button> )
                }
                <GalleryPaginationNext page={page} theme={theme} num={num} setPage={setPage}/>
            </div>
        </div>
)




}

export default GalleryPagination
