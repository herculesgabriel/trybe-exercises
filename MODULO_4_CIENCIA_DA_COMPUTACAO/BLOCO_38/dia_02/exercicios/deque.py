class Deque:
    FIRST_ELEMENT = 0

    def __init__(self) -> None:
        self._data = []

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(str(x) for x in self._data) + ")"

    def clear(self):
        self._data.clear()

    def exists(self, value):
        # for x in self._data:
        #     if x == value:
        #         return True
        # return False
        return value in self._data

    def push_front(self, value):
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        self._data.append(value)

    def pop_front(self):
        if self._data:
            return self._data.pop(self.FIRST_ELEMENT)
        return None

    def pop_back(self):
        if self._data:
            return self._data.pop()
        return None

    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]
        return None

    def peek_back(self):
        if self._data:
            return self._data[-1]
        return None

    def peek(self, position, order="asc"):
        if position < 0 or position >= len(self._data):
            return None

        if order == "desc":
            # return list(reversed(self._data))[position]
            return self._data[::-1][position]

        return self._data[position]


if __name__ == "__main__":
    deque = Deque()
    elements = [1, 2, 3, 4, 5]

    for elem in elements:
        deque.push_back(elem)

    print(f"Last element: {deque.peek(0, 'desc')}")

    print(deque)
    deque.clear()
    print(deque)
