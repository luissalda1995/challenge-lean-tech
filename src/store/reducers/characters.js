import * as actions from '../actions/actionTypes';

const initialState = {
    selectedCharacter: null,
    pageNumber: 1
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CHARACTER: {
        return {
            ...state,
            selectedCharacter: action.selectedCharacter
        }
    }
    case actions.SET_PAGE: {
        const pageNumber = state.pageNumber + action.pageNumber;
        return {
            ...state,
            pageNumber: pageNumber
        }
    }
    default:
      return state;
  }
};

export default charactersReducer;
