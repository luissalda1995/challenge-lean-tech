import * as actions from './actionTypes';

export const setCharacter = (selectedCharacter) => {
  return {
    type: actions.SET_CHARACTER,
    selectedCharacter
  };
};

export const setPageNumber = (pageNumber) => {
    return {
      type: actions.SET_PAGE,
      pageNumber,
    };
};