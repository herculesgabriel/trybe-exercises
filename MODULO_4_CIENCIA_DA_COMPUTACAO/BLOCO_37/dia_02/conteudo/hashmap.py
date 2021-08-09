class Employee:
    def __init__(self, id, name):
        self.id = id
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id):
        return id % 10

    def insert(self, employee):
        address = self.get_address(employee.id)
        self._buckets[address] = employee

    def get_value(self, id):
        address = self.get_address(id)
        return self._buckets[address].name

    def has(self, id):
        address = self.get_address(id)
        return self._buckets[address] is not None

    def update(self, id, name):
        address = self.get_address(id)
        if self._buckets[address] is not None:
            self._buckets[address].name = name


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    hashmap = HashMap()

    for id, name in employees:
        employee = Employee(id, name)
        hashmap.insert(employee)

print(hashmap.get_value(23))
hashmap.update(23, "Hercules")
print(hashmap.get_value(23))
