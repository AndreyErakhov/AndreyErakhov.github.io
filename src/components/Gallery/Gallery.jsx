/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryPainting from './GalleryPainting/GalleryPainting';
import GalleryPagination from './GalleryPagination/GalleryPagination';

const Gallery = (props) => {
  const [page, setPage] = useState(1);
  const [arrPageNumbers, setArrPageNumbers] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        props.setLoading(true);
        const resp = await axios.get(
          `https://test-front.framework.team/paintings`,
        );
        props.setGallery(resp.data);
        props.setPageNumbers(
          props.createPageNum(resp.data.length, props.limit),
        );
        props.setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getApi();
  }, []);

  useEffect(() => {
    try {
      for (let k of props.gallery) {
        k.author = props.authors[k.authorId].value;
      }
      for (let n of props.gallery) {
        n.location = props.location[n.locationId].value;
      }
    } catch {}
  }, [props.gallery]);

  useEffect(() => {
    pageNumberPaginate(page, props.pageNumbers);
  }, [page, props.pageNumbers]);

  function pageNumberPaginate(page, pageNumbers) {
    if (pageNumbers === []) {
      return 0;
    }
    if (page === 1) {
      if (pageNumbers.length < 3) {
        setArrPageNumbers(pageNumbers.slice(0, pageNumbers.length));
      } else {
        setArrPageNumbers(pageNumbers.slice(0, 3));
      }
    } else if (page === pageNumbers.length) {
      if (pageNumbers.length < 3) {
        setArrPageNumbers(pageNumbers.slice(0, pageNumbers.length));
      } else {
        setArrPageNumbers([
          pageNumbers.length - 2,
          pageNumbers.length - 1,
          pageNumbers.length,
        ]);
      }
    } else {
      setArrPageNumbers([page - 1, page, page + 1]);
    }
  }

  const lastCountryIndex = page * props.limit;
  const firstCountryIndex = lastCountryIndex - props.limit;
  const currentCountry = props.gallery.slice(
    firstCountryIndex,
    lastCountryIndex,
  );

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className="gallery">
      <GalleryPainting theme={props.theme} paintings={currentCountry} />
      <GalleryPagination
        theme={props.theme}
        paintings={currentCountry}
        pageNumbers={arrPageNumbers}
        setPage={setPage}
        paginate={paginate}
        page={page}
        num={props.pageNumbers}
      />
    </div>
  );
};

export default Gallery;
