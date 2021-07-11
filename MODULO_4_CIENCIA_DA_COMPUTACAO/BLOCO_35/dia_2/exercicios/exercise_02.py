from collections import Counter


class Statistic:
    @staticmethod
    def get_mean(numbers):
        return sum(numbers) / len(numbers)

    def get_median(numbers):
        numbers = sorted(numbers)
        middle = len(numbers) // 2

        if len(numbers) % 2 == 0:
            return (numbers[middle - 1] + numbers[middle]) / 2

        return numbers[middle]

    def get_mode(numbers):
        # numbers_dict = {}
        # for number in numbers:
        #     if number in numbers_dict:
        #         numbers_dict[number] += 1
        #     else:
        #         numbers_dict[number] = 1
        # numbers_dict = sorted(
        #     numbers_dict.items(), key=lambda x: x[1], reverse=True
        # )
        # return numbers_dict[0][0]
        number, counter = Counter(numbers).most_common(1)[0]
        return number
