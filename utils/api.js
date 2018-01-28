import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'mobile-flashcards:decks';

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      cards: []
    }
  }));
}

export function addCardToDeck(title, card) {
  return getDeck(title).then(
    deck => AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [title]: {
        ...deck,
        cards: [
          ...deck.cards,
          card
        ]
      }
    }))
  );
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(
    results => JSON.parse(results)
  );
}

export function getDeck(title) {
  return getDecks().then(
    decks => decks[title]
  );
}

export function clearDecks() {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({}));
}