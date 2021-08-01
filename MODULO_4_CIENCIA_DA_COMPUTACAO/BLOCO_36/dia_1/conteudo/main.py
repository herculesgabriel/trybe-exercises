def multiply_arrays(array):
    number_of_iterations = 0

    for number1 in array:
        for number2 in array:
            for number3 in array:
                number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")


meu_array = list(range(300))

multiply_arrays(meu_array)
