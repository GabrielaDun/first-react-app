import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle.js';
import Card from '../Card/Card.js';
import { useSelector } from 'react-redux';
import { getFavoriteTrue } from '../../redux/store';

const Favorite = props => {
    console.log(props);
    const cards = useSelector(getFavoriteTrue);
    console.log(cards)
    return (
        <div className={styles.favorite}>
            <PageTitle>FAVORITE</PageTitle>
            <div className={styles.box}>
                <div className={styles.column}>
                    <ul className={styles.cards}> 
                        {cards.map(card => 
                        <Card 
                            key={card.id} 
                            title={card.title}
                            id={card.id}
                        />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Favorite;