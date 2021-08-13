class Stack:
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def __str__(self):
        items = ""

        for i in range(self.size()):
            value = self._data[i]
            items += str(value)
            if i + 1 < self.size():
                items += ", "

        return "Stack(" + items + ")"

    def is_empty(self):
        return not len(self._data)

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if not self.is_empty():
            return self._data.pop()

        return None

    def peek(self):
        if not self.is_empty():
            return self._data[-1]

        return None

    def clear(self):
        self._data.clear()
