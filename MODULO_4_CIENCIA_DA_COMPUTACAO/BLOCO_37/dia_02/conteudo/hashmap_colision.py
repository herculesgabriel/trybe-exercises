class Employee:
    def __init__(self, id, name):
        self.id = id
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id):
        return id % 10

    def insert(self, employee):
        address = self.get_address(employee.id)
        self._buckets[address].append(employee)

    def get_value(self, id):
        address = self.get_address(id)
        for item in self._buckets[address]:
            if item.id == id:
                return item.name
        return None

    def has(self, id):
        address = self.get_address(id)
        for item in self._buckets[address]:
            if item.id == id:
                return item.name is not None
        return False

    def update(self, id, name):
        address = self.get_address(id)
        for item in self._buckets[address]:
            if item.id == id:
                item.name = name


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    hashmap = HashMap()

    for id, name in employees:
        employee = Employee(id, name)
        hashmap.insert(employee)

print(hashmap.get_value(23))
hashmap.update(23, "Hercules")
print(hashmap.get_value(23))
