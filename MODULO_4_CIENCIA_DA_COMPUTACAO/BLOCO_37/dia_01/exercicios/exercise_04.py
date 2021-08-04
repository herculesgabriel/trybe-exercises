def find_students_per_time(inputs, outputs, search):
    students_in_library = 0

    # for i in range(len(inputs)):
    #     if inputs[i] <= search <= outputs[i]:
    for input, output in zip(inputs, outputs):
        if input < search < output:
            students_in_library += 1

    return students_in_library


print(find_students_per_time([1, 2, 3], [3, 2, 7], 4))
