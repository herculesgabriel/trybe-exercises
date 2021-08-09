entrada = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}


def bluff(bets):
    players = list(bets.keys())

    p_one = bets[players[0]]
    p_two = bets[players[1]]

    p_one_set = set(p_one)
    p_two_set = set(p_two)

    p_one_exclusive_nums = p_one_set.difference(p_two_set)
    sorted_nums = sorted(p_one_exclusive_nums)
    p_one_initial_score = sorted_nums[-1]
    p_one_reducer = sorted_nums[0]
    p_one_score = p_one_initial_score - p_one_reducer

    p_two_exclusive_nums = p_two_set.difference(p_one_set)
    sorted_nums = sorted(p_two_exclusive_nums)
    p_two_initial_score = sorted_nums[-1]
    p_two_reducer = sorted_nums[0]
    p_two_score = p_two_initial_score - p_two_reducer

    if p_one_score > p_two_score:
        return players[0]
    if p_one_score < p_two_score:
        return players[1]

    return None


print(bluff(entrada))
