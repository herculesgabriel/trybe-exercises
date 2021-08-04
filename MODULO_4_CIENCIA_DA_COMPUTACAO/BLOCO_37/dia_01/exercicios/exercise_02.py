def shuffle_cards(deck):
    mid = len(deck) // 2
    left_cursor, right_cursor = 0, mid

    shuffled = []
    for i in range(mid):
        shuffled.append(deck[left_cursor])
        shuffled.append(deck[right_cursor])
        left_cursor += 1
        right_cursor += 1

    return shuffled


decks = [[2, 6, 4, 5], [1, 4, 4, 7, 6, 6]]

for deck in decks:
    print(shuffle_cards(deck))
