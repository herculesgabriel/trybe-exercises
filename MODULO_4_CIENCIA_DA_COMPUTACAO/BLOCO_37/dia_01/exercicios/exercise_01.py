def analyze_data(data):
    sets = []

    current_set = []
    for n in data:
        if n == 1:
            current_set.append(n)
        elif len(current_set) > 0:
            sets.append(current_set)
            current_set = []

    sets.append(current_set)

    biggest = 0
    for each in sets:
        if len(each) > biggest:
            biggest = len(each)

    return biggest


values = [[0, 1, 1, 1, 0, 0, 1, 1], [1, 1, 1, 1, 0, 0, 1, 1]]

for value in values:
    result = analyze_data(value)
    print(f"Max time: {result}")
