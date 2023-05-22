import classes from './GalleryPaginationNext.module.scss';
import nextPageWhite from '../../../../assets/images/nextPageWhite.svg';
import nextPageDark from '../../../../assets/images/nextPageDark.svg';
import dobleNextWhite from '../../../../assets/images/dobleNextWhite.svg';
import dobleNextDark from '../../../../assets/images/dobleNextDark.svg';

const GalleryPaginationNext = ({ page, theme, num, setPage }) => {
  const dobleNextPage = () => {
    setPage(num.length);
  };
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <button
        disabled={page === num[num.length - 1]}
        className={
          page === num[num.length - 1]
            ? `${classes.gallery_pagination__content_btn__img} 
                   ${classes.gallery_pagination__content_btn__img__disabled}`
            : classes.gallery_pagination__content_btn__img
        }
        onClick={nextPage}
      >
        {theme === 'light' ? (
          <img src={nextPageWhite} alt="nextPageWhite" />
        ) : (
          <img src={nextPageDark} alt="nextPageDark" />
        )}
      </button>

      <button
        className={
          page === num[num.length - 1]
            ? `${classes.gallery_pagination__content_btn__doble_next} 
                  ${classes.gallery_pagination__content_btn__img__disabled}`
            : classes.gallery_pagination__content_btn__doble_next
        }
        onClick={dobleNextPage}
      >
        {theme === 'light' ? (
          <img src={dobleNextWhite} alt="dobleNextWhite" />
        ) : (
          <img src={dobleNextDark} alt="dobleNextDark" />
        )}
      </button>
    </>
  );
};

export default GalleryPaginationNext;
