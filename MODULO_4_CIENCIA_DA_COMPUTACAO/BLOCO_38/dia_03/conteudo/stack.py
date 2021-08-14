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
        # self._data = list()
        self._data.clear()


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack)
    print(f"Size: {content_stack.size()}")

    print(f"Peek: {content_stack.peek()}")
    print(f"Pop: {content_stack.pop()}")

    print(f"Peek: {content_stack.peek()}")
    print(f"Size: {content_stack.size()}")

    print(f"Clear: {content_stack.clear()}")
    print(f"Size: {content_stack.size()}")
