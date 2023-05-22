import classes from './Selector.module.scss'

const SelectorName = (props) => {

    return(
        <div className="selector-name">
            <input className={classes.selector_name__content}    
                value={props.filterName}  
                onChange={(e) => props.setFilterName(e.target.value)}
                type="text" 
                name="text" 
                autoComplete="off"
                placeholder='Name'/>
        </div>
    )
}

export default SelectorName