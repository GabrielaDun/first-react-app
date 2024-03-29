import Column from '../Column/Column';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsById } from '../../redux/Reducers/columnsReducer';
import { getListById } from '../../redux/Reducers/listRedux';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';


const List = () => {
    const { listId } = useParams();
    console.log(listId)

    const listData = useSelector(state => getListById(state, listId));
    console.log(listData);

    const columns = useSelector(state => getColumnsById (state, listId));

      if(!listData) return <Navigate to="/" />
        return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
          </header>
          <p className={styles.description}>{listData.description}</p>
          <SearchForm />
          <section className={styles.columns}>
            {columns.map(column =>
              <Column
                key={column.id}
                {...column}  />
            )}
          </section>
          <ColumnForm />
        </div>
      )
  };
  
  export default List;