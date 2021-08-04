def analyze_combinations(products):
    length = len(products)
    combinations = 0

    for i in range(length):
        for j in range(i + 1, length):
            if products[i] == products[j]:
                combinations += 1
            j += 1

    return combinations
