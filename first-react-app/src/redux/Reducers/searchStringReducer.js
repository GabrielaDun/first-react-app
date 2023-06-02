import strContains from '../../utils/strContains';

// selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));


//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_SEARCH_FRAZE = createActionName('ADD_SEARCH_FRAZE');

// action creators
export const addSearchFraze = payload => ({ type: 'ADD_SEARCH_FRAZE', payload });

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case ADD_SEARCH_FRAZE:
        return action.payload
      default:
        return statePart;
    }
  }

export default searchStringReducer;