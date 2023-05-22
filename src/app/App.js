import './../assets/styles/reset.scss'
import Header from '../components/Header/Header';
import Selectors from '../components/Selectors/Selectors';
import Gallery from '../components/Gallery/Gallery';
import { useState } from 'react';
import Loading from '../components/Loading/Loading';

function App() {
  const [gallery, setGallery] = useState([])
  const [filterName, setFilterName] = useState('')
  const [filterLocation, setFilterLocation] = useState('')
  const [filterAuthor, setFilterAuthor] = useState('')
  const [filterCreated, setFilterCreated] = useState(['',''])
  const [location, setLocation] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([])
  const [loading, setLoading] = useState(false)
  const [limit] = useState(12)
  const [arrLength, setArrLength] = useState()
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light')



  function resetApp() {
    setFilterName('')
    setFilterLocation('')
    setFilterAuthor('')
    setFilterCreated(['',''])
  }

  function createPageNum(amount, limit) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(amount / limit); i++){
        pageNumbers.push(i)
    }
    if(pageNumbers.length === 0){
      return [1]
    }
    return pageNumbers    
}
  
  const filter = (gallery,filterName, filterLocation, filterAuthor, filterCreated) => {
    let arr = gallery

    if(filterName){
      arr = arr.filter(data => {
        return data.name.toLowerCase().includes(filterName.toLowerCase())
      })
    }

    if(filterLocation){
      arr = arr.filter(data => {
        return data.location.includes(filterLocation)
      })
    }

    if(filterAuthor){
      arr = arr.filter(data => {
        return data.author.includes(filterAuthor)
      })
    }
    
    if(filterCreated){
      let filterArr = filterCreated

      if(filterCreated[0] === ''){
        filterArr = [0, filterCreated[1]]
      }
  
      if (filterCreated[1] === ''){
        filterArr = [filterCreated[0], 9999]
      }
      arr = arr.filter(data => {
        if( filterArr[0] < data.created && data.created < filterArr[1] ) {
          return true
        } else {
          return false
        }
      })
    }

    // render pagination 
    if(arr.length !== arrLength) {
      setArrLength( arr.length )
      setPageNumbers(createPageNum(arr.length, limit))
    }

    return arr
  }
  const filterGalleryName = filter(gallery,filterName, filterLocation,filterAuthor,filterCreated)


  return (
      <div className='app'>
          <Header theme={theme} setTheme={setTheme} resetApp={resetApp}/>
            <main className='main'>
              <Selectors 
              theme={theme}
              filterCreated={filterCreated}
              filterLocation={filterLocation}
              filterAuthor={filterAuthor}
              setFilterCreated={setFilterCreated}
              setFilterAuthor={setFilterAuthor}
              setFilterLocation={setFilterLocation}
              authors={authors} 
              setAuthors={setAuthors} 
              location={location} 
              setLocation={setLocation} 
              filterName={filterName} 
              setFilterName={setFilterName} />
              <Gallery 
              theme={theme}
              limit={limit}
              createPageNum={createPageNum}
              pageNumbers={pageNumbers}
              setPageNumbers={setPageNumbers}
              location={location} 
              authors={authors} 
              gallery={filterGalleryName} 
              galleryNoneFilter={gallery}
              setGallery={setGallery} 
              setLoading={setLoading}/>
            </main>
            <Loading loading={loading} />
      </div>
  );
}

export default App;
