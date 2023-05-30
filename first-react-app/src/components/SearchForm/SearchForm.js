
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import initialState from '../../redux/initialState';

const SearchForm = () => {
    const dispatch = useDispatch();
    let [searchFraze, setsearchFraze] = useState('');
    console.log(searchFraze);
    searchFraze = searchFraze.toLowerCase();

    const handleSubmit = e => {
        searchFraze = searchFraze.toLowerCase();
        console.log(searchFraze);
        e.preventDefault();
        dispatch({type: 'ADD_SEARCH_FRAZE', payload: {searchFraze}});
        setsearchFraze('');
    }
    console.log(initialState);
    
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..."  value={searchFraze} onChange={e => setsearchFraze(e.target.value)}/>
            <Button> 
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;

