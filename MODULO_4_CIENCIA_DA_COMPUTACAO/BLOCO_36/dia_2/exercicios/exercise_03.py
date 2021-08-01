def biggest_integer(numbers):
    if len(numbers) < 2:
        return numbers[0]
    else:
        if not numbers[-2] >= numbers[-1]:
            numbers[-2] = numbers[-1]

        return biggest_integer(numbers[:-1])


biggest_integer([2, 4, 1, 10, 78, 13, 38])
