class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)

    def __str__(self):
        return str(self.data)

    def set(self, index, value):
        self.data.insert(index, value)

    def get(self, index):
        return self.data[index]

    def remove(self, index):
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value
