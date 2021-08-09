string = "serdevemuitolegalmasehprecisoestudarbastante"


def find_substr_length(string) -> int:
    longest = 0

    for index, _ in enumerate(string):
        seen = set()
        for char in string[index:]:
            if char in seen:
                break
            seen.add(char)
        if len(seen) > longest:
            longest = len(seen)

    return longest


print(find_substr_length(string))
