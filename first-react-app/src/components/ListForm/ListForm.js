import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/Reducers/listRedux'


const ListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        console.log(title, description)
        setTitle('');
        setDescription('');
    }
    
	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            Description: <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>ADD LIST</Button>
        </form>
	);
};

export default ListForm;