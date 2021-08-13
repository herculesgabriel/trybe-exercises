from stack import Stack


class BetterStack(Stack):
    def min_value(self):
        if self.is_empty():
            return None

        smallest = self._data[0]

        for i in range(1, len(self._data)):
            if self._data[i] < smallest:
                smallest = self._data[i]

        return smallest


if __name__ == "__main__":
    stack = BetterStack()

    stack.push(1)
    stack.push(-2)
    stack.push(3)

    print(stack.min_value())
