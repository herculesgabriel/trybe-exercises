class Subordinates:
    def __init__(self, subordinates):
        self.subordinates = subordinates
        self.scores = {}

    def get(self, link):
        if link not in self.scores:
            return None
        return self.scores[link]

    def add(self, link, score):
        self.scores[link] = score

    def calc_score(self, person):
        if person in self.scores:
            print(f"{person} already has a calculated score!")
            return self.scores[person]

        count = 1

        for subordinate in self.subordinates[person]:
            score = self.calc_score(subordinate)
            count += score
            self.scores[subordinate] = score

        return count
