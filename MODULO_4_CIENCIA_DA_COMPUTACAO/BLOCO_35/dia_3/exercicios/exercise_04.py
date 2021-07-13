from abc import ABC, abstractmethod


class DeckIterator(ABC):
    @abstractmethod
    def __init__(self, deck):
        raise NotImplementedError

    @abstractmethod
    def __next__(self):
        raise NotImplementedError


class DescendingDeckIterator(DeckIterator):
    def __init__(self, deck):
        self._deck = deck
        self._current = len(deck) - 1

    def __next__(self):
        if self._current < 0:
            raise StopIteration
        current_card = self._deck[self._current]
        self._current -= 1

        return current_card


class AscendingDeckIterator(DeckIterator):
    def __init__(self, deck):
        self._deck = deck
        self._current = 0

    def __next__(self):
        if self._current == len(self._deck):
            raise StopIteration
        current_card = self._deck[self._current]
        self._current += 1

        return current_card


class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

    def __repr__(self):
        return "<%s de %s>" % (self.value, self.suit)


class Deck:
    suits = "copas ouros espadas paus".split()
    values = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, iterator=AscendingDeckIterator):
        self.iterator = iterator
        self._current = 0
        self._cards = [
            Card(value, suit) for suit in self.suits for value in self.values
        ]

    def __len__(self):
        return len(self._cards)

    def __iter__(self):
        return self.iterator(self._cards)


if __name__ == "__main__":
    deck = Deck(iterator=DescendingDeckIterator)

    for card in deck:
        print(card)
