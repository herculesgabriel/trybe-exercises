def get_fibonacci_number(n):
    fibonacci_numbers = [0, 1]

    while len(fibonacci_numbers) <= n:
        new_number = fibonacci_numbers[-2] + fibonacci_numbers[-1]
        fibonacci_numbers.append(new_number)

    return fibonacci_numbers[-1]


print(get_fibonacci_number(7))


def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(7))
