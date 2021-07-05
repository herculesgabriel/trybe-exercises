def get_fizz_buzz_list(list_length: int):
    if type(list_length) == int and list_length == 0:
        raise TypeError("argument must be a integer greater than 0")

    number_list = []

    for number in range(1, list_length + 1):
        if number % 3 == 0 and number % 5 == 0:
            number_list.append("FizzBuzz")
        elif number % 3 == 0:
            number_list.append("Fizz")
        elif number % 5 == 0:
            number_list.append("Buzz")
        else:
            number_list.append(number)

    return number_list


if __name__ == "__main__":
    print(get_fizz_buzz_list(0))
