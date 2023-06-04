import styles from './Card.module.scss';
import { addToFavorite } from '../../redux/Reducers/cardsReducer';
import { useDispatch } from 'react-redux';


const Card = props => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        const cardId = props.id
        console.log(cardId);
        e.preventDefault();
        dispatch(addToFavorite(cardId));
    }

    return (
        <form className={styles.card} id={props.id} onClick= {handleSubmit}>
            {props.title}
            <button>
                <span className={"fa fa-star-o"} />
            </button>
        </form>
    );
};

export default Card;