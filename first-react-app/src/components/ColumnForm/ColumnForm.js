import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/Reducers/columnsReducer'
import { useParams } from 'react-router';


const ColumnForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    let [icon, setIcon] = useState('');
    const { listId } = useParams();
    console.log(listId)

    icon = icon.toLowerCase();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    }
    
	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>ADD COLUMN</Button>
        </form>
	);
};

export default ColumnForm;