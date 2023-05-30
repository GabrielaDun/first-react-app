import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';


const ColumnForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    let [icon, setIcon] = useState('');

    icon = icon.toLowerCase();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_COLUMN', payload: {title, icon}});
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