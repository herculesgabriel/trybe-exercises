from stack import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() == self.limit:
            raise StackOverflow
        super().push(value)


if __name__ == "__main__":
    stack = LimitStack(2)
    stack.push(1)
    stack.push(-2)

    try:
        stack.push(3)
    except StackOverflow:
        print("Não é possível adicionar outro item à pilha")
