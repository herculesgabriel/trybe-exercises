def reverse_list(array):
    reversed_list = []
    position = len(array) - 1

    for elem in array:
        reversed_list.append(array[position])
        position -= 1

    return reversed_list


reverse_list([1, 2, 3, 5, 7, 2, 4])


def recursive_reverse(array):
    if len(array) < 2:
        return array
    else:
        return recursive_reverse(array[1:]) + [array[0]]


recursive_reverse([1, 2, 3, 5])
