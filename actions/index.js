import { getDecks } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function fetchDecks() {
  return dispatch => (
    getDecks().then(
      decks => dispatch(receiveDecks(decks))
    )
  );
}