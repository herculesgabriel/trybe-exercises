PHONE_DICT = {
    "A": "2",
    "B": "2",
    "C": "2",
    "D": "3",
    "E": "3",
    "F": "3",
    "G": "4",
    "H": "4",
    "I": "4",
    "J": "5",
    "K": "5",
    "L": "5",
    "M": "6",
    "N": "6",
    "O": "6",
    "P": "7",
    "Q": "7",
    "R": "7",
    "S": "7",
    "T": "8",
    "U": "8",
    "V": "8",
    "W": "9",
    "X": "9",
    "Y": "9",
    "Z": "9",
}

TOO_LONG_ARG_ERROR = "the argument must less than or equal to 30 long"
NO_ARGUMENT = "you must provide one argument"
INVALID_CHARACTERS = "invalid entry. Only A-Z, 0, 1 and - are accepted"


def invalid_param(param: str):
    for letter in param:
        if not PHONE_DICT.get(letter):
            if letter != "0" and letter != "1" and letter != "-":
                return True
    return False


def get_phone_number(code=""):
    if not code:
        raise TypeError(NO_ARGUMENT)
    if len(code) > 30:
        raise TypeError(TOO_LONG_ARG_ERROR)
    if invalid_param(code):
        raise TypeError(INVALID_CHARACTERS)

    phone_number = []

    for letter in code:
        if not PHONE_DICT.get(letter):
            phone_number.append(letter)
        else:
            phone_number.append(PHONE_DICT[letter])

    return "".join(phone_number)


if __name__ == "__main__":
    print(get_phone_number("1-HOME-SWEET-HOME"))
