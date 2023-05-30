import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {
    const phase = useSelector(state => state.searchFraze.searchFraze);
    console.log(phase);

    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.includes(phase)));
    console.log(cards);

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
                    title={card.title} 
                />
                )}
            </ul>
            <CardForm columnId={props.id} action={props.action}/>
        </article>
    );
  };
  
  export default Column;