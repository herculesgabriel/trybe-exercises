from deque import Deque


def is_palindrome(string):
    string_deque = Deque(50)

    for char in string:
        if char.isalpha():
            string_deque.push_back(char.lower())

    while len(string_deque) > 1:
        first_item = string_deque.pop_front()
        last_item = string_deque.pop_back()

        if first_item != last_item:
            return False

    return True


# def is_palindrome(string):
#     regular_deque = Deque(50)
#     reversed_deque = Deque(50)
#     not_allowed = [" ", ","]

#     for char in string:
#         if char not in not_allowed:
#             parsed_char = char.lower()

#             regular_deque.push_back(parsed_char)
#             reversed_deque.push_front(parsed_char)

#     return str(regular_deque) == str(reversed_deque)


if __name__ == "__main__":
    print(is_palindrome("a dama admirou o rim da amada"))
    print(is_palindrome("madam"))
    print(is_palindrome("mais um teste"))
