def mdc(a, b):
    max_divisor = 1

    for n in range(2, a + 1):
        if a % n == 0 and b % n == 0:
            max_divisor = n

    return max_divisor


def recursive_mdc(a, b):
    if b == 0:
        return a
    return recursive_mdc(b, a % b)


# mdc(18, 12)
recursive_mdc(18, 12)
