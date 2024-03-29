import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/Reducers/searchStringReducer';

const Column = props => {
    const cards = useSelector(state => getFilteredCards(state, props.id));
    return (
        <article className={styles.column}>
            <h2 className={styles.title} title ={props.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}> 
                    <i className={props.icon}></i>
                </span> 
                {props.title} 
            </h2>
            <ul className={styles.cards}> 
                {cards.map(card => 
                <Card 
                    key={card.id} 
                    {...card}  />
                )}
            </ul>
            <CardForm columnId={props.id} action={props.action}/>
        </article>
    );
  };
  
  export default Column;