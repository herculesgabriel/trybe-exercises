string = "bbbbaaaacccaaaaaaddddddddccccccc"

char_count = {}

for char in string:
    if char not in char_count:
        char_count[char] = 1
    else:
        char_count[char] += 1

print(char_count.items())
