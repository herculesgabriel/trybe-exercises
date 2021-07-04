import random

random_number = random.randint(1, 10)
guess = 0

while guess != random_number:
    guess = input("Qual é o seu palpite? ")
    guess = int(guess)

print("Acertou! O número era", random_number)
