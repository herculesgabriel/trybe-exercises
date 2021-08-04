from Array import Array


class Matrix(Array):
    def get(self, row, column):
        return self.data[row][column]

    def set(self, row, column, value):
        try:
            self.data[row].insert(column, value)
        except IndexError:
            self.data.insert(row, [value])

    def remove(self, row, column):
        return self.data[row].pop(column)
