def count_even(n):
    if n < 2:
        return 0
    else:
        even = 1 if n % 2 == 0 else 0
        return even + count_even(n - 1)


count_even(6)
