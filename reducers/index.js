import {
  RECEIVE_DECKS
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
        items: action.decks
      };
  }
}