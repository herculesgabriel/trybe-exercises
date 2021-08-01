def binary_search(array, target):
    count = 0
    start = 0
    end = len(array) - 1

    while start <= end:
        count += 1
        mid = (start + end) // 2
        current = array[mid]

        if current == target:
            return current, count

        if current < target:
            start = mid + 1
        else:
            end = mid - 1

    return -1, count


array = list(range(300000))

result = binary_search(array, 1345)

print(result)
