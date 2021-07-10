# Abstraction name
# - Item

# Attributes/States
# - name
# - price

# Behaviors
# - change price

# Abstraction name
# - Order

# Attributes/States
# - client
# - items

# Behaviors
# - calculate total (for each item, sum: price)


class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def change_price(self, new_price):
        self.price = new_price


class Order:
    def __init__(self, client):
        self.client = client
        self.items = []

    def calculate_total(self):
        total = 0
        for item in self.items:
            total += item.price
        return total
