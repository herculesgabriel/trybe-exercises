class Conjunto:
    def __init__(self):
        self.set = [False for n in range(1001)]
        self.last_element = 0

    def add_item(self, n):
        if n > 1000:
            raise ValueError("Number cannot be greater than 1000")

        if n > self.last_element:
            self.last_element = n

        self.set[n] = True

    def union(self, conjunto):
        new_set = Conjunto()

        for i in range(len(self.set)):
            if i in self or i in conjunto:
                new_set.add_item(i)

        return new_set

    def intersection(self, conjunto):
        new_set = Conjunto()

        for i in range(len(self.set)):
            if i in self and i in conjunto:
                new_set.add_item(i)

        return new_set

    def difference(self, conjunto):
        new_set = Conjunto()

        for i in range(len(self.set)):
            if i in self and i not in conjunto:
                new_set.add_item(i)

        return new_set

    def issubset(self, conjunto):
        for n in range(len(self.set)):
            if n in self and n not in conjunto:
                return False

        return True

    def issuperset(self, conjunto):
        for n in range(len(self.set)):
            if n not in self and n in conjunto:
                return False

        return True

    def __str__(self):
        # string = "{"
        # for index, is_in_set in enumerate(self.set):
        #     if is_in_set:
        #         string += str(index)
        #         if index < self.last_element:
        #             string += ", "
        # string += "}"

        true_values = [n for n in range(len(self.set)) if self.set[n] is True]
        string = ""

        for key in true_values:
            if key == true_values[-1]:
                string += f"{key}"
            else:
                string += f"{key}, "

        return "{" + string + "}"

    def __contains__(self, item):
        try:
            return self.set[item]
        except IndexError:
            return False


if __name__ == "__main__":
    conjunto = Conjunto()

    conjunto.add_item(0)
    conjunto.add_item(10)
    conjunto.add_item(100)
    conjunto.add_item(1000)

    print(f"conjunto: {conjunto}")

    print(f"is 5 in conjunto? {5 in conjunto}")
    print(f"is 10 in conjunto? {10 in conjunto}")

    A = Conjunto()
    B = Conjunto()

    for i in range(1, 11):
        A.add_item(i)

    for i in range(10, 21):
        B.add_item(i)

    C = A.union(B)

    print(f"A: {A}")
    print(f"B: {B}")
    print(f"C: {C}")

    print(f"is B subset of C? {B.issubset(C)}")
    print(f"is C subset of B? {C.issubset(B)}")

    print(f"is C superset of B? {C.issuperset(B)}")
    print(f"is B superset of C? {B.issuperset(C)}")

    D = A.intersection(B)

    print(f"intersection A and B: {D}")

    E = Conjunto()
    F = Conjunto()

    for i in range(5, 10):
        E.add_item(i)

    for i in range(7, 12):
        F.add_item(i)

    G = E.difference(F)

    print(f"E: {E}")
    print(f"F: {F}")
    print(f"difference between E and F: {G}")
