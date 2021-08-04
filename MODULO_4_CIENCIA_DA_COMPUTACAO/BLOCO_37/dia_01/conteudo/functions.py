array = [1, 2, 4, 5, 6]
another_array = [7, 8, 9]
new_array = array + another_array
print(f"New array: {new_array}.")

if 5 in new_array:
    print("Yay! Number 5 found in the array.")

count = [1, 2, 1, 2, 1, 4, 5, 6].count(1)
print(f"Number 1 was found {count} times in the array.")

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

del matrix[2][2]
print(f"After deletion: {matrix}")
