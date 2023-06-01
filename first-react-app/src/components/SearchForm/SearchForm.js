
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import initialState from '../../redux/initialState';
import { addSearchFraze } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    let [searchString, setsearchString] = useState('');

    const handleSubmit = e => {
        console.log(searchString);
        e.preventDefault();
        dispatch(addSearchFraze (searchString));
        //setsearchString('');
    }
    console.log(initialState);
    
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..."  value={searchString} onChange={e => setsearchString(e.target.value)}/>
            <Button> 
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;

