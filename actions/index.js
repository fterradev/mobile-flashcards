import * as api from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export const RECEIVE_NEW_DECK = 'RECEIVE_NEW_DECK';
function receiveNewDeck(deck) {
  return {
    type: RECEIVE_NEW_DECK,
    deck
  };
}

export function fetchDecks() {
  return dispatch => (
    api.getDecks().then(
      (decks) => dispatch(receiveDecks(decks))
    )
  );
}

export const ADD_DECK_TITLE = 'ADD_DECK_TITLE';
function addDeckTitle(title) {
  return {
    type: ADD_DECK_TITLE,
    title
  };
}

export function saveDeckTitle(title) {
  return dispatch => (
    api.saveDeckTitle(title).then(
      () => dispatch(addDeckTitle(title))
    )
  );
}

export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';
function addCardToDeck(title, card) {
  return {
    type: ADD_CARD_TO_DECK,
    title,
    card
  };
}

export function saveCardIntoDeck(title, card) {
  return dispatch => (
    api.addCardToDeck(title, card).then(
      () => dispatch(addCardToDeck(title, card))
    )
  );
}

export const RESET_DECKS = 'RESET_DECKS';
function resetDecks() {
  return {
    type: RESET_DECKS
  }
}

export function clearDecks() {
  return dispatch => (
    api.clearDecks().then(
      () => dispatch(resetDecks())
    )
  );
}