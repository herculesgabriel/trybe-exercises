from abc import ABC, abstractmethod
from math import pi as PI


class GeometricFigure(ABC):
    @abstractmethod
    def calculate_area(self):
        raise NotImplementedError

    @abstractmethod
    def calculate_perimeter(self):
        raise NotImplementedError


class Square(GeometricFigure):
    def __init__(self, side):
        self.side = side

    def calculate_area(self):
        return self.side ** 2

    def calculate_perimeter(self):
        return self.side * 4


class Rectangle(GeometricFigure):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.width * self.height

    def calculate_perimeter(self):
        return (self.width + self.height) * 2


class Circle(GeometricFigure):
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return PI * self.radius ** 2

    def calculate_perimeter(self):
        return 2 * PI * self.radius
