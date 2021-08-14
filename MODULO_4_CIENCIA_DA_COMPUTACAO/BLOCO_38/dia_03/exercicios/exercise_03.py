from stack import Stack


class RotativeStack(Stack):
    def get(self, target):
        cars_out = Stack()
        car_to_be_returned = None
        position = None

        for index, car in enumerate(self._data):
            if car == target:
                position = index
                break

        if not position:
            return None

        count = self.size() - 1
        while count > position:
            count -= 1
            car = self.pop()
            cars_out.push(car)

        car_to_be_returned = self.pop()

        while not cars_out.is_empty():
            car = cars_out.pop()
            self.push(car)

        return car_to_be_returned


if __name__ == "__main__":
    stack = RotativeStack()

    stack.push("palio")
    stack.push("fusion")
    stack.push("ferrari")
    stack.push("fusca")

    print(stack)
    print(stack.get("fusca"))
    print(stack)
