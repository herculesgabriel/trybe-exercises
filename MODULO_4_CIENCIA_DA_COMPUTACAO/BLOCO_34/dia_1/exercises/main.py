import math


def bigger_number(a, b):
    if a > b:
        return a
    return b


def average(numbers_list):
    sum = 0

    for number in numbers_list:
        sum += number

    return sum / len(numbers_list)


def print_asterisks(n):
    if n > 1:
        for line in range(n):
            for index in range(n):
                print("*", end="")
            print("")


def bigger_name(names):
    bigger = ""

    for name in names:
        if len(name) > len(bigger):
            bigger = name

    return bigger


def painting_budget(area):
    area_final = area * area
    rendimento = 9
    tamanho_lata = 18
    valor_lata = 80

    litros_para_pintar = area_final / rendimento
    latas_para_pintar = math.ceil(litros_para_pintar / tamanho_lata)
    total = latas_para_pintar * valor_lata

    return (latas_para_pintar, total)


def which_triangle(a, b, c):
    if not a + b > c:
        return "is not a triangle"

    if a == b == c:
        return "equilateral triangle"
    if a == b or a == c or b == c:
        return "isosceles triangle"

    return "scalene triangle"


print(bigger_number(2, 4))
print(average([4, 6, 9, 2, 6]))
print_asterisks(5)
print(bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
print(painting_budget(58))
print(which_triangle(3, 3, 3))
