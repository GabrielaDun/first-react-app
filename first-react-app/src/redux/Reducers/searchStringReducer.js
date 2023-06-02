export const addSearchFraze = payload => ({ type: 'ADD_SEARCH_FRAZE', payload });

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
        return action.payload
      default:
        return statePart;
    }
  }
export default searchStringReducer;