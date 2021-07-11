class Television:
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__on = False

    def increase_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def decrease_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def change_channel(self, channel):
        if channel < 1 or channel > 99:
            raise ValueError("Channel value must be between 1 and 99")
        else:
            self.__channel = channel

    def toggle_on_off(self):
        self.__on = not self.__on
