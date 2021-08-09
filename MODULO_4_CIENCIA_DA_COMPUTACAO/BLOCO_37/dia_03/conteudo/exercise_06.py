def find_duplicate(nums):
    sorted_nums = sorted(nums)

    last_num = sorted_nums[0]

    for n in range(1, len(sorted_nums)):
        if sorted_nums[n] == last_num:
            return sorted_nums[n]
        else:
            last_num = sorted_nums[n]

    return None


print(find_duplicate([1, 3, 2, 4, 5, 1]))
