import styles from './Card.module.scss';
import { addToFavorite, deleteCard } from '../../redux/Reducers/cardsReducer';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';


const Card = props => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const cardId = props.id
        dispatch(addToFavorite(cardId));
        console.log(cardId);
        console.log(props.isFavorite);
    }

    const handleDelete = e => {
        e.preventDefault();

        const cardId = props.id;
        dispatch(deleteCard(cardId));
    }

    return (
        <form className={styles.card} id={props.id}>
            <div>
                {props.title}
            </div>
            <div className={styles.buttons}>
                <button 
                    onClick= {handleSubmit} 
                    className={clsx(styles.button, props.isFavorite && styles.isActive)}>
                    <i className={'fa fa-star-o'} />
                </button>
                <button onClick= {handleDelete}>
                    <span className={"fa fa-trash"} />
                </button>
            </div>
        </form>
    );
};

export default Card;