class Square:
    def __init__(self, lado):
        self.lado = lado

    def calculate_area(self):
        return self.lado * self.lado

    def calculate_perimeter(self):
        return self.lado * 4


class Rectangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def calculate_area(self):
        return self.base * self.height

    def calculate_perimeter(self):
        return 2 * (self.base + self.height)
