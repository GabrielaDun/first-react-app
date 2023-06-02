import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/store';


const Card = props => {
    const dispatch = useDispatch();
    console.log(props);

    const handleSubmit = e => {
        const cardId = props.id
        console.log(cardId);
        e.preventDefault();
        dispatch(addToFavorite(cardId));
    }

    return (
        <form className={styles.card} id={props.id} onSubmit= {handleSubmit}>
            {props.title}
            <button>
                <span className={"fa fa-star-o"} />
            </button>
        </form>
    );
};

export default Card;