from exercise_01 import find_words
from exercise_02 import Subordinates

word = ["atach", "welldonehoneyr"]
words = [["cat", "bt", "hat", "tree", "caaat"], ["hello", "world", "students"]]

print(f"Result for {word[0]} is: {find_words(words[0], word[0])}")
print(f"Result for {word[1]} is: {find_words(words[1], word[1])}")
print()

data = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
}

subordinates = Subordinates(data)

print(f"-> 1 has {subordinates.calc_score(1)} subordinates", end="\n\n")
print(f"-> 2 has {subordinates.calc_score(2)} subordinates", end="\n\n")
print(f"-> 3 has {subordinates.calc_score(3)} subordinates", end="\n\n")
print(f"-> 4 has {subordinates.calc_score(4)} subordinates", end="\n\n")
print(f"-> 5 has {subordinates.calc_score(5)} subordinates", end="\n\n")
print(f"-> 6 has {subordinates.calc_score(6)} subordinates", end="\n\n")
print(f"-> 7 has {subordinates.calc_score(7)} subordinates", end="\n\n")
