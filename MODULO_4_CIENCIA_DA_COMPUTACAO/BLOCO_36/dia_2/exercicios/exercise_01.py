def count_even(n):
    even = 0

    for number in range(1, n + 1):
        if not number % 2:
            even += 1

    return even


def count_even_simpler(n):
    return n // 2


print(count_even(12))
print(count_even_simpler(12))
