import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './Reducers/listRedux';
import cardsReducer from './Reducers/cardsReducer';
import columnsReducer from './Reducers/columnsReducer';
import searchStringReducer from './Reducers/searchStringReducer';


//selectors
export const getAllColumns = state => state.columns;


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