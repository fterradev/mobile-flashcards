import {
  RECEIVE_DECKS,
  ADD_DECK_TITLE,
  ADD_CARD_TO_DECK
} from '../actions';

function decks(
  state = {
    items: {}
  },
  action
) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK_TITLE:
      const { title } = action;
      return {
        ...state,
        [title]: {
          title
        }
      };
    case ADD_CARD_TO_DECK:
      const { title, card } = action;
      const { cards } = state.title.cards;
      return {
        ...state,
        [title]: {
          ...title,
          cards: {
            ...cards,
            card
          }
        }
      };
  }
}