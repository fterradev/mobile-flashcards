import {
  RECEIVE_DECKS,
  ADD_DECK_TITLE,
  ADD_CARD_TO_DECK,
  RESET_DECKS
} from '../actions';

function decks(
  state = {},
  action
) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK_TITLE:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          cards: []
        }
      };
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: {
          ...state[title],
          cards: [
            ...state[title].cards,
            card
          ]
        }
      };
    case RESET_DECKS:
      return {};
  }
}

export default decks;