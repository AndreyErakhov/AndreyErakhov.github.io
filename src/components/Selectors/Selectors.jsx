/* eslint-disable react-hooks/exhaustive-deps */
import Select from "react-select"
import SelectorName from "./SelectorName/SelectorName"
import './Selectors.scss'
import { useEffect } from "react";
import axios from "axios";
import SelectorCreated from "./SelectorCreated/SelectorCreated";
import close from '../../assets/images/close.svg'

const Selectors = (props) => {

    useEffect(() => {
        const getApi = async () => {
            try {
                const resp = await axios.get(`https://test-front.framework.team/locations`)
                    const arr = resp.data.map( obj => {
                    return {value: obj.location , label: obj.location}
                } )
                arr.unshift({value:"" , label: 'Locations'})
                props.setLocation(arr)
            } catch (err) {
                console.error(err.toJSON())
            }
            try {
                const resp = await axios.get(`https://test-front.framework.team/authors`)
                    const arr = resp.data.map( obj => {
                    return {value: obj.name , label: obj.name}
                } )
                arr.unshift({value:"" , label: 'Authors'})
                props.setAuthors(arr)
            } catch (err) {
                console.error(err.toJSON())
            }
          }
        getApi()

    }, [])

    function filterValueLocation() {
        if(props.filterLocation === '') {
            return  null
        }
    }

    function filterValueAuthor() {
        if(props.filterAuthor === '') {
            return  null
        }
    }

    function resetLocation() {
        props.setFilterLocation('')
    }
    function resetAuthor() {
        props.setFilterAuthor('')
    }

    return(
        <div className='selectors'>
            <div className="selectors-content">
                <SelectorName 
                theme={props.theme}
                setFilterName={props.setFilterName}
                filterName={props.filterName}/>
                <div className='selectors-content__select'>
                    <Select
                    value={filterValueAuthor()}
                    onChange={(e) => props.setFilterAuthor(e.value)}
                    classNamePrefix = 'custom-select'
                    isSearchable = {false}
                    options={props.authors}
                    placeholder = 'Author'/>
                    {!(props.filterAuthor === '')
                        ? <button onClick={resetAuthor} className="selectors-content__select-close">
                            <img src={close} alt="close" />
                          </button>
                        : ''
                    }
                </div>
                <div className='selectors-content__select'>
                    <Select
                    value={filterValueLocation()}
                    onChange={(e) => props.setFilterLocation(e.value)}
                    classNamePrefix = 'custom-select'
                    isSearchable = {false}
                    options={props.location}
                    placeholder= 'Location'
                    />
                    { !(props.filterLocation === '')
                        ? <button onClick={resetLocation} className=" selectors-content__select-close">
                            <img src={close} alt="close" />
                          </button>
                        : ''
                    }
                </div>
                <SelectorCreated 
                theme={props.theme}
                filterCreated={props.filterCreated} 
                setFilterCreated={props.setFilterCreated}/>
            </div>
        </div>
    )
}
export default Selectors