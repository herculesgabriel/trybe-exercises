import sys

numbers = input("Digite números naturais separados por um espaço: ")
value = 0
is_number = False

for number in numbers.split():
    is_number = str.isdigit(number)
    if not is_number:
        print(
            f"Erro ao somar valores, {number} é um valor inválido",
            file=sys.stderr,
        )
    else:
        value += int(number)

if is_number:
    print(value)
