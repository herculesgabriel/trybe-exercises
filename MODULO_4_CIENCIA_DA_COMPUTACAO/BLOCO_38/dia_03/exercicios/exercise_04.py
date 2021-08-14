from stack import Stack


def solve_expression(expr):
    expr_stack = Stack()
    operations = ["+", "-", "*", "/"]

    chars = expr.split(" ")

    for char in chars:
        if char not in operations:
            expr_stack.push(int(char))
        else:
            a = expr_stack.pop()
            b = expr_stack.pop()

            if char == "+":
                expr_stack.push(b + a)
            elif char == "-":
                expr_stack.push(b - a)
            elif char == "*":
                expr_stack.push(b * a)
            else:
                expr_stack.push(b / a)

    return expr_stack.pop()


if __name__ == "__main__":

    print(solve_expression("5 10 + 30 5 / -"))  # 9
    print(solve_expression("10 5 30 * 30 / 2 * +"))  # 20
    print(solve_expression("5 10 * 30 - 4 5 * 10 - +"))  # 30
    print(solve_expression("30 10 / 5 + 5 10 + *"))  # 120
    print(solve_expression("50 10 * 2 / 5 * 5 /"))  # 250
