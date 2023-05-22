import classes from './GalleryGlass.module.scss'
import glassWhite from '../../../assets/images/glassWhite.svg'
import glassDark from '../../../assets/images/glassDark.svg'
const GalleryGlass = ({theme}) => {
    const text = 'Ничего не найдено :('
    return(
        <div className={classes.glass}>
            <div className={classes.glass__content}>
                {theme === 'light'
                    ? <img src={glassWhite} alt="glassWhite" />
                    : <img src={glassDark} alt="glassDark" />
                }
                <p>{text}</p>
            </div>
        </div>
    )
}

export default GalleryGlass