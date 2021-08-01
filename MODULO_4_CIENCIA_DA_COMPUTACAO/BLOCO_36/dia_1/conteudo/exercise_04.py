def binary_search(array1, array2):
    found_count = 0
    for number in array1:
        count = 0
        start = 0
        end = len(array2) - 1

        while start <= end:
            count += 1
            mid = (start + end) // 2
            current = array2[mid]

            if current == number:
                found_count += 1
                break

            if current < number:
                start = mid + 1
            else:
                end = mid - 1
    
    return found_count


array1 = list(range(300000))
array2 = list(range(300000))

result = binary_search(array1, array2)

print(result)
