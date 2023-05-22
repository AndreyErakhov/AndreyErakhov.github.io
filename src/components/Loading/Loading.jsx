import classes from './Loading.module.scss'
import loading from '../../assets/images/loading.svg'

const Loading = (props) => {

    return(
        <div className={ props.loading ? `${classes.modal__loading} ${classes.active}` : classes.modal__loading}>
                <div className={classes.box__loading}>
                    <img src={loading} alt="Loading" />
                    <p>Загрузка</p>
                </div>
        </div>
    )
}

export default Loading