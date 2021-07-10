class Television:
    def __init__(self):
        self.state = "off"
        self.channel = 1
        self.volume = 0
        self.volume_change_rate = 5

    def toggle_on_off(self):
        if self.state == "off":
            self.state = "on"
        else:
            self.state = "off"

    def increase_volume(self):
        new_volume = self.volume + self.volume_change_rate
        if new_volume > 100:
            self.volume = 100
        else:
            self.volume = new_volume

    def decrease_volume(self):
        new_volume = self.volume - self.volume_change_rate
        if new_volume < 0:
            self.volume = 0
        else:
            self.volume = new_volume

    def change_channel(self, channel):
        self.channel = channel
