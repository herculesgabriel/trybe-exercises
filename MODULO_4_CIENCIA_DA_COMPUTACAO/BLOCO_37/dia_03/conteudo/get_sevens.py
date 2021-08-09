def get_sevens(rolls):
    seen_before = set()
    answer = []

    for roll in rolls:
        if 7 - roll in seen_before:
            answer.append((7 - roll, roll))
            seen_before.discard(7 - roll)
        else:
            seen_before.add(roll)

    return answer


rolls = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1]
print(get_sevens(rolls))
