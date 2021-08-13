from stack import Stack


def calc(operation, a, b):
    if operation == "+":
        return int(a) + int(b)
    if operation == "-":
        return int(a) - int(b)
    if operation == "*":
        return int(a) * int(b)
    if operation == "/":
        return int(a) / int(b)


def solve_expression(expr):
    expr_stack = Stack()

    chars = expr.split(" ")

    for char in chars:
        if expr_stack.size() < 2:
            expr_stack.push(char)
        else:
            a = expr_stack.pop()
            b = expr_stack.pop()

            result = calc(char, a, b)
            expr_stack.push(result)

    return expr_stack.pop()


if __name__ == "__main__":
    print(solve_expression("10 5 + 3 *"))
