# def find_words(words, chars):
#     chars_dict = {}

#     for char in chars:
#         if char not in chars_dict:
#             chars_dict[char] = 1
#         else:
#             chars_dict[char] += 1

#     possible_words = []

#     for word in words:
#         word_dict = {}

#         for char in word:
#             if char not in word_dict:
#                 word_dict[char] = 1
#             else:
#                 word_dict[char] += 1

#         all_exist = True
#         for key, value in word_dict.items():
#             if key not in chars_dict:
#                 all_exist = False
#                 break
#             else:
#                 if chars_dict[key] < value:
#                     all_exist = False

#         if all_exist:
#             possible_words.append(word_dict)

#     count = 0

#     for word in possible_words:
#         for key, value in word.items():
#             count += value

#     return count


def find_words(words, chars):
    chars_dict = {}

    for char in chars:
        if char not in chars_dict:
            chars_dict[char] = 1
        else:
            chars_dict[char] += 1

    count = 0

    for word in words:
        chars_dict_copy = chars_dict.copy()
        all_exist = True

        for char in word:
            if char not in chars_dict:
                all_exist = False
                break

            if chars_dict_copy[char] < 1:
                all_exist = False
                break

            chars_dict_copy[char] -= 1

        if all_exist:
            count += len(word)

    return count
