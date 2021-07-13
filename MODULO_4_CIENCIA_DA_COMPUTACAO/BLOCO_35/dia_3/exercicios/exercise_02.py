# from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


# class Baralho(Iterable):
class Baralho:
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self.current = 0
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterador(self._cartas)


# class BaralhoIterador(Iterator):
class BaralhoIterador:
    def __init__(self, baralho):
        self._baralho = baralho
        self._current = 0

    def __next__(self):
        current_card = self._baralho[self._current]
        self._current += 1

        if self._current == len(self._baralho):
            raise StopIteration

        return current_card


if __name__ == "__main__":
    baralho = Baralho()

    for carta in baralho:
        print(carta)
