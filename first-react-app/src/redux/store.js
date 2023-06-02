import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';
import listsReducer from './Reducers/listRedux';
import cardsReducer from './Reducers/cardsReducer';
import columnsReducer from './columnsReducer';
import searchStringReducer from './Reducers/searchStringReducer';


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getColumnsById = ({ columns }, listId) => columns
  .filter(column => column.listId === listId);

export const getAllColumns = state => state.columns;
export const getFavoriteTrue = state => state.cards
.filter(card => card.isFavorite === true);


// action creators
export const addToFavorite = payload => ({ type: 'ADD_FAVORITE', payload });



  const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
  }
  
  const reducer = combineReducers(subreducers);

  
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;