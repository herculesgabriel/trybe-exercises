class Room:
    def __init__(self, number: int, floor: int, capacity: int, price: int):
        self.number = number
        self.floor = floor
        self.capacity = capacity
        self.price = price
        self.booked = False


class Guest:
    def __init__(self, name: str, document: str):
        self.name = name
        self.document = document


class Reservation:
    def __init__(self, room: Room, guest: Guest):
        self.room = room
        self.guest = guest


class Hotel:
    def __init__(self, name: str, rooms, reservations):
        self.name = name
        self.rooms = rooms
        self.reservations = reservations

    def check_in(self, *guests):
        available_rooms = [room for room in self.rooms if room.booked is False]
        if len(available_rooms) == 0:
            raise Exception("No available rooms")

        available_rooms = [
            room for room in self.rooms if room.capacity >= len(guests)
        ]
        if len(available_rooms) == 0:
            raise IndexError("No rooms available to that guest quantity")

        room = self.available_rooms(len(guests))[0]
        room.booked = True
        for guest in guests:
            reservation = Reservation(room, guest)
            self.reservations.append(reservation)

    def check_out(self, room: Room):
        self.reservations = [
            reservation
            for reservation in self.reservations
            if room != reservation.room
        ]

        room.booked = False

    def available_rooms(self, capacity: int):
        return sorted(
            [
                room
                for room in self.rooms
                if room.booked is False and room.capacity >= capacity
            ],
            key=lambda room: room.capacity,
        )


if __name__ == "__main__":
    rooms = [
        Room(26, 1, 2, 100),
        Room(28, 1, 3, 200),
        Room(34, 2, 4, 300),
        Room(57, 3, 5, 400),
    ]

    guests = []

    hotel = Hotel("Hotel Transylvania", rooms, guests)

    hotel.check_in(Guest("Hercules", "123456"), Guest("Pedro", "456123"))
    assert hotel.rooms[0].booked is True

    hotel.check_in(Guest("Beatriz", "321654"), Guest("Elionai", "654231"))
    assert hotel.rooms[1].booked is True

    assert len(hotel.available_rooms(2)) == 2
    assert len(hotel.available_rooms(5)) == 1

    hotel.check_out(hotel.rooms[0])
    assert hotel.rooms[0].booked is False
