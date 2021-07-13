from abc import ABC, abstractmethod


class TaxStrategy(ABC):
    @staticmethod
    @abstractmethod
    def calculate(self, value):
        raise NotImplementedError


class ISS(TaxStrategy):
    @staticmethod
    def calculate(value):
        return value * 0.1


class ICMS(TaxStrategy):
    @staticmethod
    def calculate(value):
        return value * 0.06


class PIS(TaxStrategy):
    @staticmethod
    def calculate(value):
        return value * 0.065


class COFINS(TaxStrategy):
    @staticmethod
    def calculate(value):
        return value * 0.03


class Budget:
    def __init__(self, value):
        self.value = value

    def calculate_tax(self, tax_strategy):
        return tax_strategy.calculate(self.value)


if __name__ == "__main__":
    budget = Budget(100)
    print(f"ISS: {budget.calculate_tax(ISS)}")
    print(f"ICMS: {budget.calculate_tax(ICMS)}")
    print(f"PIS: {budget.calculate_tax(PIS)}")
    print(f"COFINS: {budget.calculate_tax(COFINS)}")
