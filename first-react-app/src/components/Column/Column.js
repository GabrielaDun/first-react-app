import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
//import shortid from 'shortid';

const Column = props => {
    console.log(props);
    return (
        <article className={styles.column}>
            <h2 className={styles.title} title ={props.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}> 
                    <i className={props.icon}></i>
                </span> 
                {props.title} 
            </h2>
            <ul className={styles.cards}> 
                {props.cards.map(card => 
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