class Circle:
    def __init__(self, radius):
        self.radius = radius
        self.PI = 3.14

    def calculate_area(self):
        return self.PI * self.radius * self.radius

    def calculate_circumference(self):
        return self.PI * self.radius * 2
