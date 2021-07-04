import random
import sys

MAX_ATTEMPTS = 3


def read_words_from_file():
    with open("names_list.txt", mode="r") as file:
        content = file.read()
        words_list = [word.strip() for word in content.split()]

        return words_list


def print_welcome_message():
    print("Bem-vindo(a) ao Scramble Game!\n")
    print("Você terá três tentativas para adivinhar a palavra.\n")


def get_game_word(words):
    return random.choice(words)


def scramble_word(word):
    return "".join(random.sample(word, len(word)))


def print_wrong_answer_message(life, word):
    if life == 1:
        print("\nResposta errada! Você tem apenas 1 tentativa\n")
    elif life == 0:
        print("\nResposta errada! Suas tentativas acabaram :(")
        print(f"A resposa correta era {word}")
    else:
        print(f"Resposta errada! Você tem mais {life} tentativas\n")


def print_right_answer_message():
    print("\nParabéns! 🎉")


def ask_word(word):
    life = MAX_ATTEMPTS
    wrong_answer = True

    while wrong_answer and life != 0:
        scrambled_word = scramble_word(word)
        print("Então, qual é a palavra a seguir?")

        answer = input(f"{scrambled_word}: ")

        if answer == word:
            wrong_answer = False
            print_right_answer_message()
        else:
            life -= 1
            print_wrong_answer_message(life, word)


def game():
    words_list = read_words_from_file()

    if len(words_list) > 0:
        print_welcome_message()
        word = get_game_word(words_list)
        ask_word(word)
    else:
        print("Erro: lista de palavras vazia!", file=sys.stderr)


if __name__ == "__main__":
    game()
