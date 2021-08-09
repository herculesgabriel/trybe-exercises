estudantes = ["a", "b", "c", "d", "e", "f", "g"]
lista1_entregues = ["a", "d", "g", "c"]
lista2_entregues = ["c", "a", "f"]


def pending_list1():
    students_set = set(estudantes)
    list_one_set = set(lista1_entregues)

    print(students_set.difference(list_one_set))


def finished_all():
    students_set = set(estudantes)
    list_one_set = set(lista1_entregues)
    list_two_set = set(lista2_entregues)

    print(students_set.intersection(list_one_set, list_two_set))


def finished_some():
    list_one_set = set(lista1_entregues)
    list_two_set = set(lista2_entregues)

    print(list_one_set.union(list_two_set))


def pending_all():
    students_set = set(estudantes)
    list_one_set = set(lista1_entregues)
    list_two_set = set(lista2_entregues)

    print(students_set.difference(list_one_set, list_two_set))


pending_all()
